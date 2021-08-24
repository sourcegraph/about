# Fix gitserver eviction on macOS

Finder and About This Mac will report used disk bytes as available if the space is occupied by Time Machine [local snapshots](https://support.apple.com/en-us/HT204015). This differs from how `df` and Disk Utility behave — both would report that space as occupied.

When disk space is low, gitserver will begin evicting repositories until the minimum threshold of `SRC_REPOS_DESIRED_PERCENT_FREE` has been met. This can lead to a confusing situation for developers where gitserver's view of the disk is that it is low on capacity, but the operating system indicates that sufficient space is available.

> Note: these snapshots exist locally because the Time Machine backup disk was not available. It is recommended that you properly back up your system prior to using this playbook.

## Playbook

If gitserver is evicting repositories due to disk pressure, first use `df` to determine how much space is available. These results will be consistent with what gitserver believes to be true about the disk.

```
$ df -h
Filesystem      Size   Used  Avail Capacity iused      ifree %iused  Mounted on
/dev/disk1s1   932Gi   10Gi  316Gi     4%  488304 9767489856    0%   /
```

Now run the `tmutil` tool's `listlocalsnapshots` command to determine if you have local snapshots on disk.

```
$ tmutil listlocalsnapshots /
Snapshots for volume group containing disk /:
com.apple.TimeMachine.2021-07-23-151043.local
com.apple.TimeMachine.2021-08-22-210215.local
com.apple.TimeMachine.2021-08-23-074005.local
com.apple.TimeMachine.2021-08-23-084026.local
```

If there are snapshots, we can remove them using the `tmutil` tool's `thinlocalsnapshots` command. This command takes two arguments:

- `purge_amount`: the amount of space in bytes that you'd like to reclaim (e.g. 100 GiB = 107374182400)
- `urgency`: a number between 1 and 4 indicating priority over current backup processes (e.g. 1 is low urgency, 4 is high urgency)

```
$ tmutil thinlocalsnapshots / 107374182400 1
Thinned local snapshots:
com.apple.TimeMachine.2021-07-23-151043.local
com.apple.TimeMachine.2021-08-22-210215.local
com.apple.TimeMachine.2021-08-23-074005.local
com.apple.TimeMachine.2021-08-23-084026.local
```

## Success

Once the thinning process has completed, `df` will report that more disk space is available. If the space reclaimed is sufficient based on gitserver's configuration, there is nothing further to do.

## Failure

If thinning does not reclaim sufficient space, you can delete the snapshots using the `tmutil` tool's `deletelocalsnapshots` command. As noted earlier, be sure that you have properly backed up your machine prior to deleting snapshots.

```
$ tmutil listlocalsnapshots /
Snapshots for volume group containing disk /:
com.apple.TimeMachine.2021-07-23-151043.local

$ tmutil deletelocalsnapshots 2021-07-23-151043
Deleted local snapshot '2021-07-23-151043'

$ df -h
Filesystem      Size   Used  Avail Capacity iused      ifree %iused  Mounted on
/dev/disk1s1   932Gi   10Gi  427Gi     3%  488304 9767489856    0%   /
```
