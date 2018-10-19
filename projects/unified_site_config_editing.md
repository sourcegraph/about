# Unified site config editing and management console

Sourcegraph 2.13 improves and unifies the process for configuring Sourcegraph in our Docker and Kubernetes deployments. 

Sourcegraph 2.13 adds a failsafe management console to edit critical configuration options. Before, all site configuration was a single JSON file. This included innocuous options like adding a GitHub token, and dangerous options like TLS_CERT that could potentially lock you out of your server. We’re separating these dangerous options in a new management console that’s available even if you misconfigure your instance. 

Sourcegraph 2.13 will 

In our Docker deployment, you can currently edit the configuration directly in our web UI with tooltips and auto completion, but in our Kubernetes deployment you needed to edit a file and re-deploy the whole cluster’s configuration. In Sourcegraph 2.13, Kubernetes deployments can now edit the site configuration inside of the application with tooltips and auto completion. This’ll be accomplished by moving the site configuration from a plain file to our Postgres database. When you upgrade to 2.13, this migration will happen without the need for manual intervention. 


TODO: This work lays the foundation for having the ability to perform automatic schema migrations for your configuration, as well as integrating better secrets management 

TODO: what is the migration path?
