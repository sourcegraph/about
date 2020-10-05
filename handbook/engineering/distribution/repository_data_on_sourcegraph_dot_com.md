# Repository data on Sourcegraph.com

Repositories are typically indexed for better search performance. We index many
GitHub repositories on Sourcegraph.com, but not all of them. To find out whether
a repository is indexed for search, visit `https://sourcegraph.com/github.com/MY/REPO/-/settings/index`

## How to add a repository search index

To force indexing a repository that is not indexed, do the following:

- Connect to the machine
  - First get the ID of the database pod:

```
$ get pods --all-namespaces | grep "prod.*pgsql"
prod            pgsql-XXXXXXXXXX-XXXXXX      2/2     Running     0          19d
```
  - `kubectl -n prod exec -it pgsql-XXXXXXXXXX-XXXXXX /bin/sh` - connect to the machine

- `psql -U sg` - connect to the database on the machine

- Find the ID of the repository to index:

```
$ select repo.id from repo where repo.name LIKE 'github.com/the/repo';
12345678
```

- `INSERT INTO default_repos(repo_id) VALUES (12345678);` - add the ID to the table
