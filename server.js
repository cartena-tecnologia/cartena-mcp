#!/usr/bin/env node

const fetch = global.fetch; // Node 22 já tem fetch

const MCP_URL = "https://cartena.com.br/api/v1/mcp";
const TOKEN = process.env.CARTENA_TOKEN;

function send(response) {
  process.stdout.write(JSON.stringify(response) + "\n");
}

process.stdin.on("data", async (chunk) => {
  const msg = JSON.parse(chunk.toString());

  try {
    if (msg.method === "initialize") {
      return send({
        jsonrpc: "2.0",
        id: msg.id,
        result: {
          protocolVersion: "2024-11-05",
          serverInfo: {
            name: "cartena-mcp",
            version: "1.0.0"
          },
          capabilities: {}
        }
      });
    }

    if (msg.method === "tools/list") {
      const res = await fetch(MCP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          method: "tools/list",
          params: {},
        }),
      });

      const data = await res.json();

      return send({
        jsonrpc: "2.0",
        id: msg.id,
        result: data
      });
    }

    if (msg.method === "tools/call") {
      const res = await fetch(MCP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          method: "tools/call",
          params: msg.params,
        }),
      });

      const data = await res.json();

      return send({
        jsonrpc: "2.0",
        id: msg.id,
        result: data
      });
    }

    send({
      jsonrpc: "2.0",
      id: msg.id,
      error: {
        code: -32601,
        message: `Method not found: ${msg.method}`
      }
    });

  } catch (err) {
    send({
      jsonrpc: "2.0",
      error: {
        code: -32603,
        message: err.message
      }
    });
  }
});