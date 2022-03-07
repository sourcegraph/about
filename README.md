This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
