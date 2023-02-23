# [about.sourcegraph.com](https://about.sourcegraph.com) (Sourcegraph marketing site)

This repository contains the [about.sourcegraph.com](https://about.sourcegraph.com) website.

## Development

### Setup

1. Install [asdf](https://asdf-vm.com/)
1. Run `asdf plugin add nodejs && asdf plugin add pnpm && asdf install`

### Running the website locally

Run:

```sh
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your web browser.

### Need help editing this website?

Ask in the [#marketing channel](https://app.slack.com/client/T02FSM7DL/CNC4YAL1E) (for Sourcegraph team members), and/or [post an issue](https://github.com/sourcegraph/about/issues).

### Troubleshooting

If blog posts aren't showing up:

Run: `yarn build:cache`
