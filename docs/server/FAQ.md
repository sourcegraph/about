---
layout: markdown
title: Sourcegraph FAQ
permalink: docs/faq
---

Frequently asked questions about Sourcegraph.

## How do I expose my Sourcegraph instance to a different host port when running locally?

Change the `docker` `--publish` argument to make it listen on the specific interface and port on your host machine. For example, `docker run ... --publish 0.0.0.0:80:7080 ...` would make it accessible on port 80 of your machine. For more information, see "[Publish or expose port](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose)" in the Docker documentation.

The other option is to deploy and run Sourcegraph on a cloud provider. Follow our documentation to [deploy to Google Cloud](docs/deploy/gcp).

## How do I see my site config?

If you have admin web access to Sourcegraph, go to `http://YOUR_HOSTNAME_OR_IP/site-admin/configuration` in your browser.

OR

For single-node Server instances, follow these steps on the machine that is running the Sourcegraph Docker container:

1.  Get the Docker container id for Sourcegraph:
    ```
    $ docker ps
    CONTAINER ID        IMAGE
    d039ec989761        sourcegraph/server:x.y.z
    ```
2.  Get the contents of the site config:
    ```
    docker exec d039ec989761 cat /etc/sourcegraph/sourcegraph-config.json
    ```

For Data Center:

1.  Get the id of one sourcegraph-frontend pod:
    ```
    $ kubectl get pods -l app=sourcegraph-frontend
    NAME                                    READY     STATUS    RESTARTS   AGE
    sourcegraph-frontend-7f4847975d-4r8v9   1/1       Running   0          17h
    ```
2.  Get the contents of the site config:
    ```
    kubectl exec -it sourcegraph-frontend-7f4847975d-4r8v9 -- cat /etc/sourcegraph/config.json
    ```

## How do I access the Sourcegraph database?

For Sourcegraph instances running on a single node, follow these steps on the machine that is running the Sourcegraph Docker container:

1.  Get the Docker container id for Sourcegraph:
    ```
    $ docker ps
    CONTAINER ID        IMAGE
    d039ec989761        sourcegraph/server:<server-version-number></server-version-number>
    ```
2.  Open a PostgreSQL interactive terminal:
    ```
    docker exec -it d039ec989761 psql -U postgres sourcegraph
    ```
3.  Run your SQL query:
    ```
    select * from users;
    ```

For Data Center:

1.  Get the id of one pgsql pod:
    ```
    $ kubectl get pods -l app=pgsql
    NAME                     READY     STATUS    RESTARTS   AGE
    pgsql-76a4bfcd64-rt4cn   2/2       Running   0          19m
    ```
2.  Open a PostgreSQL interactive terminal:
    ```
    kubectl exec -it pgsql-76a4bfcd64-rt4cn -- psql -U sg
    ```
3.  Run your SQL query:
    ```
    select * from users;
    ```
