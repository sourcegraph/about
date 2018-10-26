# Browser extension testing and reliability

Browser extensions are a powerful way to improve your workflow by adding new
features to your browser. However, they are inherently hard to test. Our popular
[browser extension](repo...), which adds code intelligence to your code host,
runs in multiple browsers ([Chrome](...), [Firefox](...)) which can change the
way their APIs work at any time and runs across many code
hosts, any of which could change their DOM, thus breaking our extension.

Reliability is important to us and our users, so we're building up the testing
infrastructure around our browser extension. Here's how we plan to do it:

1. Abstract code so it is more unit testable

- Keep calls to browser extension APIs out of business logic so we can unit
  test that logic
- Rearchitect logic integrating with individual code hosts so that we can unit
  test the integration of code hosts and code intelligence

1. Add more e2e tests

- Run each test on all supported code hosts - code hosts won't be considered
  fully supported until we're able to run tests on it
- Test with different feature flags enabled or disabled
- Test using different Sourcegraph instances
