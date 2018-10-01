---
layout: markdown
title: Using TLS/SSL
permalink: docs/config/tlsssl
---

If you intend to make your Sourcegraph instance accessible on the Internet or another untrusted network, you should use TLS so that all traffic will be served over HTTPS.

## Let's Encrypt

Sourcegraph will use [Let's Encrypt](https://letsencrypt.org/) by default if the following conditions are met:

- Your `appURL` site configuration option begins with `https://...`, and the host is reachable on port 80 and port 443.
- You have not configured manual TLS certificates as described below.
- You have not configured `tls.letsencrypt` to `off`. (Defaults to `auto`)

Once you have HTTPS, working we suggest configuring `httpToHttpsRedirect` to `true` to prevent users browsing Sourcegraph via plaintext HTTP.

---

## Using your own TLS certificate

### Single-server Sourcegraph deployments

For single-server Docker image deployments, add the following lines to your site configuration. The TLS certificate and private key must be specified as PEM-encoded strings.

> Tip: Use [jq](https://stedolan.github.io/jq/) with the command `jq -R --slurp < /path/to/my/cert-or-key.pem` to obtain the JSON-stringified contents of each PEM file.

```json
{
  // ...
  "tlsCert": "-----BEGIN CERTIFICATE-----\nMIIFdTCCBF2gAWiB...",
  "tlsKey": "-----BEGIN RSA PRIVATE KEY-----\nMII...",
  "appURL": "https://example.com:3443" // Must begin with "https"; replace with the public IP or hostname of your machine
  // ...
}
```

Next, restart your Sourcegraph instance using the same `docker run` [command](/docs), but map the host port to the container HTTPS port 7443 (not the HTTP port 7080). In this example, the host port 443 (HTTPS) is mapped to the container's HTTPS port 7443.

<div id="docker-command-docs"><pre class="pre-wrap"><code>docker run<span class="virtual-br"></span> --publish 443:7443 --rm<span class="virtual-br"></span> --volume ~/.sourcegraph/config:/etc/sourcegraph<span class="virtual-br"></span> --volume ~/.sourcegraph/data:/var/opt/sourcegraph<span class="virtual-br"></span> --volume /var/run/docker.sock:/var/run/docker.sock<span class="virtual-br"></span> sourcegraph/server:<server-version-number></server-version-number></code></pre></div>

If you are running on cloud infrastructure, you will likely need to add an ingress rule to make port 30443 accessible to the Internet.
