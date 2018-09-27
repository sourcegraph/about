# Build your own Sourcegraph extensions WIP

We’re happy to announce that Sourcegraph extensions are ready for early adopters to start writing their own extensions.

Sourcegraph extensions allow you to extend code hosts like GitHub in the same way that editor extensions allow you to extend editors. Once you write an extension, it runs anywhere you see code (e.g. GitHub).

Here’s an [extension that shows a tooltip when you hover over code](https://github.com/sourcegraph/sourcegraph-extension-samples/tree/master/hello-world):

```typescript
import * as sourcegraph from "sourcegraph";

export function activate(): void {
  sourcegraph.languages.registerHoverProvider(["*"], {
    provideHover: () => ({ contents: { value: "Hello, world! 🎉🎉🎉" } })
  });
}
```

TODO: image or GIF of hello world

Here’s another [extension that adds a link to the npm registry next to import/require statements in JavaScript/TypeScript code](TODO LINK):

TODO write this extension and put its code here

TODO: image or GIF of npm registry links

When you publish your extension to the [Sourcegraph extension registry](https://sourcegraph.com/extensions), anyone can install and instantly start using it. ([Sourcegraph Enterprise](https://about.sourcegraph.com/docs) supports a [private extension registry].)

Next steps:

- [Write a Sourcegraph extension](https://github.com/sourcegraph/sourcegraph-extension-docs)
- [Browse more Sourcegraph extension samples](https://github.com/sourcegraph/sourcegraph-extension-samples)
- [See Sourcegraph extensions published by other early adopters](https://sourcegraph.com/extensions)

## Changelog since last alpha release

- The new extension registry lets you browse and add any extension published on Sourcegraph
- A new [`src extensions publish` command](https://github.com/sourcegraph/src-cli) for publishing Sourcegraph extensions
- Sourcegraph instances can now have private extension registries extensions can be whitelisted on an Enterprise instance
- Extensions can now run on diff pages
- Created extension authoring documentation
