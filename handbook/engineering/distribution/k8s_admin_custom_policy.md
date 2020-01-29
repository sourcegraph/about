# How to use a k8s pod security policy to simulate admin restrictions

This describes how to simulate being a Sourcegraph admin with restrictions. ie an admin that can only schedule pods with
security restrictions applied to the pods.

It is assumed you have a test cluster running in GCP or a similar k8s runtime and you are a cluster admin, ie
you have super powers in the cluster:

```shell script
kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin --user $(gcloud config get-value account)
```

First we need a pod security policy that matches as close as possible the restrictions at the customer site. For example
(this is just an example, tweak as necessary):

```yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: nonroot-policy
spec:
  privileged: false
  allowPrivilegeEscalation: false
  # The rest fills in some required fields.
  seLinux:
    rule: RunAsAny
  supplementalGroups:
    rule: 'MustRunAs'
    ranges:
      # Forbid adding the root group.
      - min: 1
        max: 65535
  runAsUser:
    rule: 'MustRunAsNonRoot'
  fsGroup:
    rule: 'MustRunAs'
    ranges:
      # Forbid adding the root group.
      - min: 1
        max: 65535
  volumes:
      - '*'
  readOnlyRootFilesystem: true
``` 

Save this yaml into `nonroot-policy.yaml` and add the policy to the cluster:

```shell script
kubectl apply -f nonroot-policy.yaml 
```

We now create a fake account, bind this policy to the account and impersonate it when we deploy and manage Sourcegraph.
The impersonation will ensure that the policy is enforced for any pods that are scheduled/edited/managed by the fake account.

Let's create the fake account. It will be a service account (so not a user). This enables us to later impersonate it.

```shell script
kubectl create serviceaccount fake-user
```

We create a role binding for it to declare that the fake user can edit the cluster (schedule pods):

```shell script
kubectl create rolebinding fake-editor --clusterrole=edit --serviceaccount=default:fake-user
```

We create a role for the pod security policy:

```shell script
kubectl create role nonroot:unprivileged --verb=use --resource=podsecuritypolicy --resource-name=nonroot-policy
``` 

and then bind it to the fake user:

```shell script
kubectl create rolebinding fake-user:nonroot:unprivileged --role=nonroot:unprivileged --serviceaccount=default:fake-user
```

Our fake user is now under the spell of the pod security policy. Let's check that:

```shell script
kubectl --as=system:serviceaccount:default:fake-user auth can-i use podsecuritypolicy/nonroot-policy
```

It should return `yes`.

From here on you can impersonate the fake user by adding `--as=system:serviceaccount:default:fake-user` to your `kubectl` commands:

```shell script
kubectl --as=system:serviceaccount:default:fake-user get pods
```

