We’re happy to announce that [Sourcegraph extensions](https://docs.sourcegraph.com/extensions) are ready for early adopters to start writing their own extensions.

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

![image](https://user-images.githubusercontent.com/1387653/46226421-0e811100-c311-11e8-9288-b711ecbbfe2a.png)

Here’s another [extension that adds a link to the npm registry next to import/require statements in JavaScript/TypeScript code](https://github.com/sourcegraph/sourcegraph-extension-samples/tree/master/npm-import-stats):

![demo](https://user-images.githubusercontent.com/1387653/46236952-54040500-c336-11e8-885a-a68c3fff4ba4.gif)

When you publish your extension to the [Sourcegraph.com extension registry](https://sourcegraph.com/extensions), anyone can install and instantly start using it. (Sourcegraph Enterprise supports a [private extension registry](https://docs.sourcegraph.com/admin/extensions#publish-extensions-to-a-private-extension-registry).)

Next steps:

- [Sourcegraph extensions documentation](https://docs.sourcegraph.com/extensions)
- [Write a Sourcegraph extension](https://docs.sourcegraph.com/extensions/authoring)
- [Browse more Sourcegraph extension samples](https://github.com/sourcegraph/sourcegraph-extension-samples)
- [See Sourcegraph extensions published by other early adopters](https://sourcegraph.com/extensions)

## Changelog since last alpha release

- The new extension registry lets you browse and add any extension published on Sourcegraph
- A new [`src extensions publish` command](https://github.com/sourcegraph/src-cli) for publishing Sourcegraph extensions
- Sourcegraph instances can now have private extension registries extensions can be whitelisted on an Enterprise instance
- Extensions can now run on diff pages
- Created extension authoring documentation
