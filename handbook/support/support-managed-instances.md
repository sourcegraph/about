## Accessing Managed Instances
In order to have good security and risk mitigation practices, only a subset of our CSE's have access to managed instances. If you need to access logs for these customers, post in our #customer-support-internal Slack channel and @ mention Don, Jason, and Mariam. One of them can help! 

If you are a CSE being trained to work with managed instances, read ahead.

## Google Cloud Platform SDK/CLI
To work with managed instances, you'll need acccess to Sourcegraph's Google Cloud Console and access to all managed instances therein.  You will also need to install the Google Cloud Platform (GCP) SDK locally. Instructions for doing so can be found [here](https://cloud.google.com/sdk/docs/install). Pay close attention to the troubleshooting tips in this link, as you are likely to run into a few minor snags along the way.

To check and see if you've installed the GCP SDK correctly, enter the command `gcloud version` in your terminal. It should return the current version of your SDK. If so, congratulations. You now have the ability to start up virtual machines for each managed instance, and begin debugging.

Next, read the [managed instances operations](https://about.sourcegraph.com/handbook/engineering/distribution/managed/operations) page in its entirety. This provides direction for using the GCP and the command line to debug managed instances, and is absolutely necessary reading. Bookmark the page, because you will be revisiting it often.

## Logging in to Managed Instances of Sourcegraph
In general, this is *not advised*. While you will have access to every managed instance, we want to limit this approach in order to maintain the privacy of our customers. However, if other approaches fail to resolve an issue, this is an option. Should you find yourself in a situation where you need to login to a customer's instance directly, make sure you inform the customer before you do so, and provide thorough and clear context for your reasoning behind needing to do so. Be completely transparent about your intentions so that you and the customer are on the same page.

## Requesting Help
It is important to do everything we can to solve issues with managed instances ourselves, but realistically, this won't always be the case. As a general reminder, if you are stuck on an issue, always engage your teammates first. Approach Mariam, Don or Jason and request help. If Mariam, Don or Jason cannot figure out what's going on, you are free to engage the distribution team in the way they've outlined [here](https://about.sourcegraph.com/handbook/support/engaging-other-teams). To be clear, it is okay to engage the distribution team, we just want to make sure that it is the last step in our process towards finding a solution, and that it only taken when absolutely necessary.



