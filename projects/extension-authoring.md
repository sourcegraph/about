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

![image](https://user-images.githubusercontent.com/1387653/46226421-0e811100-c311-11e8-9288-b711ecbbfe2a.png)

Here’s another [extension that adds a link to the npm registry next to import/require statements in JavaScript/TypeScript code](https://github.com/sourcegraph/sourcegraph-extension-samples/tree/master/npm-import-stats):

```typescript
import * as sourcegraph from "sourcegraph";
import { Observable, from, EMPTY } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, concatMap, toArray } from "rxjs/operators";

const fetchDownloads = (pkg: string): Observable<number> => {
  return ajax({
    url: `https://api.npmjs.org/downloads/point/last-week/${pkg}`
  }).pipe(
    map(v => {
      return v && v.response && v.response.downloads ? v.response.downloads : 0;
    })
  );
};

export function activate(): void {
  sourcegraph.workspace.onDidOpenTextDocument.subscribe(doc => {
    from(doc.text.split("\n"))
      .pipe(
        concatMap((line, lineNumber) => {
          const match = /^import.*from .(\w+)/.exec(line);
          if (match && match.length > 1) {
            const pkg = match[1];
            return fetchDownloads(pkg).pipe(
              map(downloads => ({ downloads, lineNumber, pkg }))
            );
          } else {
            return EMPTY;
          }
        }),
        toArray()
      )
      .subscribe(annotations => {
        if (
          sourcegraph.app.activeWindow &&
          sourcegraph.app.activeWindow.visibleViewComponents.length > 0
        ) {
          sourcegraph.app.activeWindow.visibleViewComponents[0].setDecorations(
            null,
            annotations.map(({ downloads, lineNumber, pkg }) => ({
              range: new sourcegraph.Range(
                new sourcegraph.Position(lineNumber, 0),
                new sourcegraph.Position(lineNumber, 0)
              ),
              after: {
                contentText: " View on npm (" + downloads + " DLs last week)",
                linkURL: `https://www.npmjs.com/package/${pkg}`,
                backgroundColor: "pink",
                color: "black"
              }
            }))
          );
        }
      });
  });
}
```

![demo](https://user-images.githubusercontent.com/1387653/46236952-54040500-c336-11e8-885a-a68c3fff4ba4.gif)

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
