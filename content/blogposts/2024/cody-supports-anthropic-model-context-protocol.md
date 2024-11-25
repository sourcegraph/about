---
title: "Cody supports additional context through Anthropic's Model Context Protocol"
authors:
  - name: Chris Sev
    url: https://x.com/chris__sev
publishDate: 2024-11-25T10:00-01:00
description: "Cody now supports Anthropic's Model Context Protocol, allowing you to bring external context into your editor."
tags: [blog]
slug: "cody-supports-anthropic-model-context-protocol"
published: true
heroImage: https://sourcegraph.com/assets/cody/cody-modelcontextprotocol.png
socialImage: https://sourcegraph.com/assets/cody/cody-modelcontextprotocol.png
---

Today marks a significant milestone in AI-assisted development: [Anthropic](https://anthropic.com) has released [Model Context Protocol (MCP)](https://modelcontextprotocol.io), an open standard for connecting AI models with external data. We're proud to announce that Sourcegraph is one of the first tools to support it. This integration opens up new possiblities to get extra context into your editor.

For example, you can now get GitHub or Linear issues, connect to your Postgres database, and access internal documentation without leaving your IDE.

Here's an example of Cody connecting to a Postgres database to write a Prisma query after looking at the database schema:

<Figure
  src="/blog/cody-mcp/cody-mcp-postgres.png"
  alt="Cody writing a Prisma query"
/>

## What is Model Context Protocol?

MCP is Anthropic's new protocol that enables users to provide additional context to LLM-powered applications like [Claude.ai](https://claude.ai). **Think of it as a standardized way to feed external information into AI models**, making them more aware of your specific use case and environment.

To get started with MCP, you would create an MCP server that connects to the data sources you want to use. Then you would create an MCP client that would connect to your server. The client could be Claude.ai.  connect Cody and your editor to your MCP server via [OpenCtx](https://openctx.org).

As launch partners with Anthropic, we've ensured that Cody can seamlessly integrate with MCP, bringing this additional context right into your editor where you need it most.

## What can you bring into Cody using MCP?

Anthropic has released [several example MCP servers](https://github.com/modelcontextprotocol/servers) that show how we can create servers to connect to various data sources. Cody supports all of these example servers out of the box. Cody can also support your own MCP server, which we'll cover later.

- [Brave Search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) - Search the Brave search API
- [Postgres](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) - Connect to your Postgres databases to query schema information and write optimized SQL
- [Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) - Access files on your local machine
- [Everything](https://github.com/modelcontextprotocol/servers/tree/main/src/everything) - A demo server showing MCP capabilities
- [Google Drive](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive) - Search and access your Google Drive documents
- [Google Maps](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps) - Get directions and information about places
- [Memo](https://github.com/modelcontextprotocol/servers/tree/main/src/memo) - Access your Memo notes
- [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git) - Get git history and commit information
- [Puppeteer](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) - Control headless Chrome for web automation
- [SQLite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) - Query SQLite databases

The beauty of MCP lies in its universality. Once you build an MCP server, it becomes a source of context for multiple tools - not just Cody. Here's how it works:

1. Your MCP server provides structured context through a [standardized protocol](https://modelcontextprotocol.io).
2. Cody connects to this server through [OpenCtx](https://openctx.org), our open standard for external context.
3. The context becomes available in your editor through Cody chat.

## Trying out the MCP to Cody integration

To get started with MCP, let's clone Anthropic's example servers and try them out. Servers are stored locally on your computer and the Cody client will connect to them.

1. Clone the [example-servers](https://github.com/modelcontextprotocol/servers) repository
2. Install the dependencies: `npm install`
3. Build the project: `npm run build`

This will create a `build` directory with the compiled server code. We will be pointing Cody to the servers in this directory.

Add the following to your VS Code JSON settings:

```json
{
  "openctx.providers": {
    "https://openctx.org/npm/@openctx/provider-modelcontextprotocol": {
      "nodeCommand": "node",
      "mcp.provider.uri": "file:///PATH_TO_YOUR_EXAMPLE_SERVERS_FOLDER/example-servers/everything/build/index.js"
    }
  }
}
```

Now you can open Cody and you'll see the `example-servers/everything` server available as a context provider. This server acts as an example to show the capabilities of MCP. 

<Figure
  src="/blog/cody-mcp/mcp-everything-server.png"
  alt="Cody showing the Everything MCP server"
/>

### The Postgres MCP server

You can try out the Postgres MCP server by updating your JSON settings to point to that example server.

```json
{
  "openctx.providers": {
    "https://openctx.org/npm/@openctx/provider-modelcontextprotocol": {
      "nodeCommand": "node",
      "mcp.provider.uri": "file:///PATH_TO_YOUR_EXAMPLE_SERVERS_FOLDER/example-servers/postgres/build/index.js",
      "mcp.provider.args": ["postgresql://root:@127.0.0.1:5433/my-database"]
    }
  }
}
```

Notice that we added a `mcp.provider.args` field that contains the connection string for the Postgres database. Now we are able to connect to the database and use it in our editor.

<Figure
  src="/blog/cody-mcp/mcp-postgres.png"
  alt="Cody using Postgres"
/>

## Building a Linear MCP integration

Want to create your own MCP server? Here's a quick tutorial to get you started. The Model Context Protocol team has created a [Python SDK](https://github.com/modelcontextprotocol/python-sdk) and a [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) that make it easy to get started building your own context server.

Here's an example of a Node.js server using the Typescript SDK that will access Linear issues. We will build this in the `example-servers` folder that you cloned earlier. In addition to that folder, you will need:

- A Linear API key
- [Cody](/cody) installed in your editor
- A new file to create your MCP server: `example-servers/src/linear/index.ts`

Here is the full code to create an MCP server that will access Linear issues:

```typescript
// example-servers/src/linear/index.ts

// Import required dependencies from MCP SDK and Linear SDK
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { LinearClient } from "@linear/sdk";

// Get Linear API key from command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Please provide a Linear API key as a command-line argument");
  process.exit(1);
}

// Initialize Linear client with API key
const apiKey = args[0];
const linearClient = new LinearClient({
  apiKey,
});

// Create new MCP server instance with basic configuration
const server = new Server(
  {
    name: "example-servers/linear",
    version: "0.1.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Handler for listing assigned issues
server.setRequestHandler(ListResourcesRequestSchema, async (request) => {
  const viewer = await linearClient.viewer;
  const issues = await viewer.assignedIssues();

  return {
    resources: issues.nodes.map((issue) => ({
      uri: `linear://${issue.id}`,
      name: issue.title,
      mimeType: "application/json",
    })),
    nextCursor: issues.pageInfo.endCursor,
  };
});

// Handler for reading detailed information about a specific issue
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const issueId = request.params.uri.replace("linear://", "");
  const issue = await linearClient.issue(issueId);

  const issueData = {
    id: issue.id,
    title: issue.title,
    description: issue.description,
    status: await issue.state,
    assignee: await issue.assignee,
    createdAt: issue.createdAt,
    updatedAt: issue.updatedAt,
  };

  return {
    contents: [
      {
        uri: request.params.uri,
        mimeType: "application/json",
        text: JSON.stringify(issueData, null, 2),
      },
    ],
  };
});

// Start the server using stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
```

You'll notice that this server implements two methods: `ListResourcesRequestSchema` and `ReadResourceRequestSchema`. The list resources method returns a list of resources that the server can provide context for. The read resource method returns the contents of a given resource.

Run the build command again to compile your new server to generate an `index.js` file that we can point Cody to: `npm run build`

Now that you have this new `index.js` file for your MCP server, connect it to Cody using OpenCtx. Add this to your VS Code JSON settings:

```json
{
  "openctx.providers": {
    "https://openctx.org/npm/@openctx/provider-modelcontextprotocol": {
      "nodeCommand": "node",
      "mcp.provider.uri": "file:///PATH_TO_YOUR_EXAMPLE_SERVERS_FOLDER/example-servers/linear/build/index.js",
      "mcp.provider.args": ["YOUR_LINEAR_API_KEY"]
    }
  }
}
```

Make sure to add your Linear API key to the `mcp.provider.args` field. Once you've added the settings, you can see the Linear context provider in the list of available providers in Cody.

<Figure
  src="/blog/cody-mcp/mcp-linear.png"
  alt="Cody showing the Linear MCP server"
/>

## What's next?

The combination of Anthropic's Model Context Protocol and Cody opens up endless possibilities for enhancing your development environment with relevant context. Whether you're building internal tools, accessing documentation, or connecting to external services, MCP provides a standardized way to bring that information right into your editor.

We're excited to see what the developer community builds with this integration. Have ideas for MCP servers? Share them with us! The future of context-aware coding is here, and it's more accessible than ever.

Ready to try it out? Install [Cody](/cody) and check out [Anthropic's example MCP servers](https://github.com/modelcontextprotocol/servers) to get started. Happy coding!