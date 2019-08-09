# More intuitive code search on sourcegraph.com

For our recent hack week, we changed search on [sourcegraph.com](http://sourcegraph.com) to be more intuitive by no longer requiring any information about which repositories to search.

Let's look at an example. If you'd recently heard about Google's "Distroless" container image and were curious about its usage, you could search [Sourcegraph.com](http://sourcegraph.com/) for `file:Dockerfile FROM gcr.io/distroless`. Before, this search would get an error message and no results, like this:

![](/blog/too-many-matching-repos.png)

To fix this, we made the top 10k repositories on Github (by watch count) the default set of repositories to search over. Here is what comes back for the same [query](https://sourcegraph.com/search?q=file:Dockerfile+FROM+gcr.io/distroless) now:

![](/blog/distroless-image-results.png)

You can use this new search capability to find examples of how things are used. 

Here's a [search](https://sourcegraph.com/search?q=pipenv+f:Dockerfile) for examples of Python's Pipenv within Dockerfiles:

![](/blog/pipenv-search.png)

To see how people are using React in Typescript, we can run this [search](https://sourcegraph.com/search?q=react%5C.+lang:typescript):

![](/blog/react-typescript-search.png)

If you'd like to explore, here are some more queries to try:

- [Find code written by or inspired by Donald Knuth](https://sourcegraph.com/search?q=knuth)
- [Learn about blockchain](https://sourcegraph.com/search?q=blockchain)
- [Find code about deep learning](https://sourcegraph.com/search?q=%22deep+learning%22)
- [See examples of dynamic programming](https://sourcegraph.com/search?q=%22dynamic+programming%22)
