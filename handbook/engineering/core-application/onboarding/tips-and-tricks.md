# Tips and tricks
- [Tips and tricks](#tips-and-tricks)
  - [Git](#git)
    - [Debugging](#debugging)

## Git

### Debugging

Git supports a number of environment variables, several of which are [particularly helpful for debugging](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_debugging). Try setting `GIT_TRACE_PACKET=1` to see what's happening at the networking level, or `GIT_TRACE_PERFORMANCE=1` to get timing information about discrete steps Git is taking.
