# 🚀 Cartena MCP Server

Este projeto implementa um servidor MCP (Model Context Protocol) que expõe ferramentas (tools) para integração com clientes compatíveis via stdio.

---

# 📦 Instalação

## 1. Pré-requisitos

- Node.js 18+ (recomendado Node 20+)
- npm ou npx

---

## 2. Uso via npx (recomendado)

Você pode executar diretamente usando `npx`:

```json
{
  "mcpServers": {
    "cartena": {
      "command": "npx",
      "args": [
        "-y",
        "github:cartena-tecnologia/cartena-mcp"
      ],
      "env": {
        "CARTENA_TOKEN": "SEU_TOKEN_AQUI"
      }
    }
  }
}
```

---

## 3. Uso local (desenvolvimento)

Clone o repositório:

```bash
git clone https://github.com/cartena-tecnologia/cartena-mcp.git
cd cartena-mcp
npm install
```

Execute o servidor:

```bash
node server.js
```

E configure seu cliente MCP apontando para o arquivo local:

```json
{
  "mcpServers": {
    "cartena": {
      "command": "node",
      "args": ["C:/caminho/para/cartena-mcp/server.js"],
      "env": {
        "CARTENA_TOKEN": "SEU_TOKEN_AQUI"
      }
    }
  }
}
```

---

# 🔐 Variáveis de ambiente

- `CARTENA_TOKEN`: Token de autenticação utilizado para acessar a API interna

Exemplo:

```bash
CARTENA_TOKEN=seu_token_aqui
```

---

# 🧠 Como funciona

O servidor MCP:

1. Inicializa via stdio  
2. Expõe ferramentas disponíveis (`tools/list`)  
3. Executa chamadas (`tools/call`)  
4. Encaminha requisições para a API backend da Cartena  

---

# 🛠️ Estrutura das tools

Cada tool implementa:

- `name`: identificador da ferramenta  
- `description`: descrição para o modelo  
- `inputSchema`: schema JSON dos parâmetros  
- `handle()`: lógica de execução  

---

# ⚠️ Observações

- Certifique-se de que o token esteja válido  
- O servidor deve ser executado como processo local (stdio)  
- Não é necessário expor endpoints HTTP  