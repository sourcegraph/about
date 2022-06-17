# Sourcegraph's Marketing Site

This is Sourcegraph's Marketing Site which is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Build Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/0078e478-115a-43da-addc-a46549a72c5d/deploy-status)](https://app.netlify.com/sites/sourcegraph/deploys)

---

## Getting Started

### Node.js

First, make sure that you have Node.js installed. You can use [`nvm`](https://github.com/nvm-sh/nvm) to automatically use the version of Node.js which is specified in the repository's [`.nvmrc`](./.nvmrc) file:

```sh
nvm install
```

Alternatively, you can use [`n`](https://www.npmjs.com/package/n) to manage your Node versions. Use the following command to install the version of Node specified in the `.nvmrc` file:

```sh
n <node version>
```

### Install Dependencies

From the top level of the project, run the following command to install dependencies:

```sh
yarn ci
```

This will install the dependencies while ensuring the lock file remains unmodified.

### Running the Application

To run the application, type the following command from the top level of the project:

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Configure the `pre-commit` Githook

To enable our pre-commit hook, update the following git config setting in the project:

```sh
git config core.hooksPath .githooks
```

## Testing

We use [Cypress](https://www.cypress.io/) as our test suite and currently have end to end tests configured.

To run tests visually, run:
```sh
yarn test
```

To run tests headlessly in the CLI, run:
```sh
yarn test:ci
```

### End to End Tests

1. To create an e2e test, add them to the [e2e directory](./cypress/e2e/) with a descriptive file name.
2. To run tests in development, run `yarn test` which watches your test files as you develop. Cypress will open in a new window.
3. Click on E2E Testing and choose a preferred browser. Click on "Start E2E Testing in {browser}.
4. You will see the tests we have under specs. Click a spec to run the test.
5. Alternatively, you can run tests in the command line in headless mode by running `yarn test:ci`.
