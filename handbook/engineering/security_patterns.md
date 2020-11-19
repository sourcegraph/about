# Security patterns

## Authorization

Authorization is the gatekeeper of securing private resources by preventing unauthorized access to those private resources. Examples of private resources are: 

- Content of a private repository
- Endpoints that can only be called by certain users (e.g. site admins)
- Settings of a user or an organization

Current forms of authorization in Sourcegraph including site-admin roles, organization memberships, campaigns permissions, repository permissions, and same user validation.

As a standard practice, users that do not have access to certain private resources should not be aware of the existencce of those private resources. In the case where only part of resources are restricted by authorization, it is reasonable to prompt the user that some resources are not avaialble because of insufficent permissions. However, in any case, we must not provide anything that can be used to indicate what those restricted resources might be.

### Enforce authorization

In Sourcegraph, there are two types of places to enforce authorization, both of them are equally important:

- At the GraphQL layer:
    - Some endpoints are restricted to certain users (e.g. site admins or the same user).
    - Any type of backend failure may indicate information about private resources that are not authorized to the client. Therefore, we should halt the process as soon as we know the request is unauthorized, and behave as if the resource does not exist at all.
- At the database layer:
    - It is our source of truth for authorization, especially for repository and campaigns permissions. Enforcing authorization at this layer is absolutely necessary.
