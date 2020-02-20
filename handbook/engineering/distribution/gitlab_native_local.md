# How to test the Gitlab native integration on a local dev machine

This specializes and augments the official admin docs for the integration with gotchas when running on localhost.
It assumes you want to develop/debug the Sourcegraph side of this relationship so therefore will run the `dev/start.sh`
command for Sourcegraph and Gitlab CE in a Docker container.

## Sourcegraph instance

Launch a Sourcegraph instance as usual with `dev/start.sh` or `enterprise/dev/start.sh`.

If you need a TLS endpoint for the Sourcegraph instance (for example to debug secure-only cookies) you can use [Caddy](https://caddyserver.com/),
 [ngrok](https://dashboard.ngrok.com/get-started) or similar to create the TLS endpoint and reverse-proxy the Sourcegraph instance.
 Please don't forget to update the external URL of the Sourcegraph instance in the site config to the appropriate TLS endpoint value.
 
## Gitlab instance

It is assumed here that you have a functioning Docker runtime on your local dev machine. We will run Gitlab like so:

```shell script
docker run --hostname localhost -p 4080:4080  \
        --name gitlab \
        --volume /Users/exampledev/sourcegraph-docker/gitlab-disk/config:/etc/gitlab \
        --volume /Users/exampledev/sourcegraph-docker/gitlab-disk/logs:/var/log/gitlab \
        --volume /Users/exampledev/sourcegraph-docker/gitlab-disk/data:/var/opt/gitlab \
        gitlab/gitlab-ce:latest
```

> Important: Make sure if you run Gitlab on a port different from port 80 then the container port has to match the host port
> so in this case 4080:4080.

Once Gitlab is running it will set up configs in `/Users/exampledev/sourcegraph-docker/gitlab-disk/config`. We need to tell it
its external URL, so go into that directory and open `gitlab.rb` in an editor. Uncomment and change the `external_url` value to `http://localhost:4080`.
You have to restart Gitlab: `docker restart gitlab`.

At this point you can add content to Gitlab to make it available for testing. Create a new project and clone the repo
locally to add some Go files to it (we want to test code navigation for example).

On the Sourcegraph side add the Gitlab instance as an external service and check that the repo cloned.

## Turn on native integration

The two relevant docs are:

* https://docs.sourcegraph.com/admin/external_service/gitlab#native-integration
* https://docs.gitlab.com/ee/integration/sourcegraph.html

You have to enable Sourcegraph integration in the rails console. Open a shell in the Gitlab container and execute `gitlab-rails console`.
At the prompt enter `Feature.enable(:sourcegraph)`.

Follow the remaining steps from both docs.

## Testing

If everything worked you should see the Sourcegraph code intel hover when you're in a File view of a Go file in the repo you set up.
Clicking on the hover will take you to the Sourcegraph instance to that point in code.

  

 
