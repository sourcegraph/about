---
title: "Strange Loop 2019 - A better story for Kubernetes secrets"
description: "Secrets are a key pillar of Kubernetes, but anyone with access to etcd can all the plaintext values! Attendees will learn techniques for securing Kubernetes secrets including encryption, KMS plugins, and tools like HashiCorp Vault, and the tradeoffs of each approach to better secure their clusters."
authors:
  - name: Ackerley Tng
    url: https://github.com/ackerleytng
publishDate: 2019-09-14T00:00-11:20
tags: [
  strange-loop
]
slug: strange-loop-2019-a-better-story-for-kubernetes-secrets
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Seth Vargo</span>
        <a href="https://twitter.com/sethvargo" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/sethvargo" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://www.sethvargo.com/" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Secrets are a key pillar of Kubernetes, but anyone with access to etcd can all the plaintext values! Attendees will learn techniques for securing Kubernetes secrets including encryption, KMS plugins, and tools like HashiCorp Vault, and the tradeoffs of each approach to better secure their clusters.

---

*If there's one thing I should take away from this talk, it's that SuperMarioKartItemBoxes on your screen are good. SuperMarioKartItemBoxes represent encrypted binary content dumped on your terminal! (Seth is such a funny speaker!)*

<Figure 
  src="https://i.stack.imgur.com/SYxut.png" 
  alt="Syxut" 
  caption={<a href="https://unix.stackexchange.com/questions/79684/fix-terminal-after-displaying-a-binary-file">source</a>}
/>

## Background

For this talk, secrets refers to keys or credentials to the application or machine, specifically not metadata, and not other config information, even though we still wouldn't want that information to be leaked.

Secrets are an attractive target for hackers. They usually include overly broad permissions, allowing attackers easy access to a wide range of actions.

#### Ways to Protect Secrets

+ Audit
  + Assume that you might be compromised
  + Log every access and use of a system
  + Potentially do some anomaly detection on those logs
+ Encrypt
  + Always encrypt secrets in transit and rest
+ Rotate keys
  + Change keys so if you're compromised, the attackers won't continue to have access to private information for any significant amount of time
+ Isolate
  + Don't put secrets and keys in the same place or on the same machine

Seth thinks audit is probably the most important on the four, but focused on encryption for this talk.

#### Encryption and layers

There are many layers of encryption, and in order of increasing depth, we have application layer, service level, filesystem, machine level. Seth recommends using at least two layers. His analogy goes like this: the bank should be set up so that even if someone breaks into the bank, they should not immediately get access to all the money (in vaults).

#### App-layer encryption

+ Apply encryption early, so that the secret exists in plaintext only within a bubble. Bubble should be defined by threat model.
+ App-layer encryption provides protection at a very granular level, and protects data as it moves through the system

## Kubernetes is insecure by default

Secrets are stored in plaintext in etcd. They are base64-encoded, but not encrypted. (Kubernetes uses etcd as its distributed key-value store.)

This is the default behavior, so self-hosted Kubernetes clusters will probably be affected, but if you're using a cloud provider, they might have already altered this default behavior.

## Attack scenarios

Seth explored 2 attack scenarios:

1. Attacker in etcd instance
2. Attacker in master node

#### Scenario 1: Attacker in etcd instance

If the attacker enters a running etcd instance, the secrets in plaintext in etcd will be compromised.

If etcd is running on a storage volume that supports backup, an attacker with access to the backup will naturally also have access to the secrets.

#### Mitigation, available beginning Kubernetes 1.7

Kubernetes 1.7 introduced a configuration option for encryption at rest. By simply including an encryption key in the Kubernetes config, you can get Kubernetes to encrypt the secrets for you.

Legitimate accesses go through the Kubernetes API server, which handles RBAC and decrypts the values only when the access is permitted.

With this, an attacker with access to the running etcd instance can no longer use the encrypted secrets. The attacker with access to the backups will also not have access to the secrets.

#### About Envelope Encryption

In `EncryptionConfig`, Kubernetes actually uses envelope encryption, which means data is encrypted with a key (DEK) that is encrypted with another key (KEK).

The DEK, or Data Encryption Key, is randomly generated and used to encrypt the data. The KEK, which is also the one in the Kubernetes configuration, is used to encrypt the DEK.

Since the DEKs are generated uniquely for each data entry, an attacker who manages to brute force the DEK for one data entry will have to repeat that for the next data entry, slowing down the attacker.

Having many keys sounds like key management hell - KEKs simplify this because the KEKs can be more centrally managed. When large numbers of DEKs need to be rotated at once, the KEK for a range of DEKs can be used to decrypt and re-encrypt the data.

When the need arises, deleting a single KEK effectively crypto-shreds all the DEKs and data it is protecting.

#### Drawbacks

+ The encryption key is in the Kubernetes configuration, and this means that you'll have to restart `kube-apiserver` every time you decide to rotate keys
  + This causes downtime
+ You actually have to generate *and* manage the keys yourself
  + Need to ensure that the keys generated are sufficiently random
  + And continue to be sufficiently random in the presence of an attacker
+ The encryption in this setup does not involve a hardware security mechanism and may not meet regulatory requirements

#### Scenario 2: Attacker in master node

An attacker in the master node will have access to the Kubernetes configuration (where the keys are stored in plaintext) and will therefore have access to the encrypted secrets.

#### Mitigation, available beginning Kubernetes 1.10

Kubernetes 1.10 introduced another encryption provider: KMS or Key Management Service. In this model, Kubernetes delegates encryption to a third-party KMS provider, like Google Cloud KMS or HashiCorp Vault.

Kubernetes will request decryption by the KMS to decrypt secrets for legitimate accesses. This request can be made over unix sockets or https.

This time, the attacker in the master node will not have access to the keys, and is forced to compromise the kms as well. This setup also requires extensive logging and auditing of accesses to the KMS to weed out rogue decryption requests.

In addition to security improvements, using KMS is also better than changing the configuration because key rotation can be done out of band, so there is no need to incur downtime to restart `kube-apiserver` after changing keys.

#### Remaining Issues

There's still definitely the "first secret" problem - the KMS must only respond to legitimate requests, and how should `kube-apiserver` prove its identity?

This problem can be delegated to the cloud provider via an IAM (Identity and Access Management service), so that `kube-apiserver` can communicate with KMS using short term credentials, generated using a pre-established trust relationship.
