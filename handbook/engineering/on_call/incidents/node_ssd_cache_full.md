# Node SSD cache out of disk space (on dot-com)

## Symptom

Report said:

> When querying https://sourcegraph.com/search?q=TypeGNUSparse+repo:sourcegraph-codeintel-showcase/go+fork:yes+&patternType=literal
> I am getting this error:

```text
text search failed: failed to search github.com/sourcegraph-codeintel-showcase/go@: failed to get archive: 
failed to fetch missing archive cache item: failed to copy and close missing archive cache item: 
write /mnt/cache/searcher-7985c4d7b8-sjwsk/searcher-archives/b0008e68dc6c3adacdc7539367b89f6286cd043dec32af722889ccdfb570acea.zip.part: 
no space left on device
```

## Diagnosis

Pretty straightforward: disk `/mnt/disks/ssd0` ran out of disk space on the node.

## Root cause finding

We first figured out which node runs pod `searcher-7985c4d7b8-sjwsk`, logged into the node with 

```shell script
gcloud compute ssh gke-node-xxx  --zone us-xxx
```
and confirmed with `df` that `/mnt/disks/ssd0` is at 100% used.

We then checked that daemonset `pod-tmp-gc` has a pod on that node
and that all currently present caches in the `/mnt/disks/ssd0/pod-tmp` directory have active pods running on that node.
(so effectively we checked that `pod-tmp-gc` is working and doing its job and hasn't left some stale caches around).
 
Next we looked who are the big disk space consumers. It happens that the node was running
two sourcegraph-frontend pods, each with cache size more than 160GB (It is unusual that k8s schedules two pods of the same
 service on one node, but it can happen). These were by far the two big consumers of cache disk space.
 
## Fixes

We killed the two frontend pods to force the scheduler to re-schedule them and one of them landed on a different node.
We checked that the `pod-tmp-gc` on the affected node started deleting the orphaned cache of the moved frontend pod.

We checked with `df` that dik space is now available and ran the original search query again to double check that it works.
