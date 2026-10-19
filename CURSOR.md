# Cartena no Cursor

A Cartena é uma plataforma de organização e acompanhamento de investimentos e despesas pessoais. Este plugin conecta o Cursor ao MCP remoto da Cartena.

## Configuração

1. Tenha uma conta em https://cartena.com.br.
2. Instale o plugin Cartena quando estiver disponível no Cursor Marketplace.
3. Abra Customize > MCPs e habilite Cartena, se necessário.
4. Quando o Cursor solicitar autenticação, entre na Cartena e autorize a conexão OAuth pelo navegador.
5. Confira as ferramentas disponíveis antes de iniciar uma conversa.

O servidor é https://mcp.cartena.com.br/mcp. Cada usuário autoriza a própria conta. Não é necessário inserir senha ou token nos arquivos do plugin. A configuração do plugin está em `.cursor-plugin/plugin.json`, que referencia `cursor.mcp.json`.

### Instalação manual do MCP

Enquanto o plugin não estiver publicado, adicione esta configuração ao arquivo de MCPs do Cursor, pelas opções de Customize > MCPs:

```json
{
  "mcpServers": {
    "cartena": {
      "url": "https://mcp.cartena.com.br/mcp"
    }
  }
}
```

Essa instalação manual conecta o servidor, mas não indica aprovação do plugin no marketplace.

## Exemplos

- Mostre o resumo da minha carteira na Cartena.
- Liste os proventos registrados na minha conta Cartena.
- Liste minhas despesas de outubro de 2026 na Cartena.
- Registre uma despesa de alimentação de R$ 25, descrição Almoço, vencimento 20/10/2026, ainda não paga.

## Ferramentas

Consultas: `get_wallet`, `get_asset`, `list_movements`, `list_earnings` e `list_expenses`.

Registros: `create_movement`, `update_movement`, `create_expense` e `mark_expense_paid`.

O conector consulta ou atualiza apenas os registros da conta autorizada na Cartena. Não executa ordens em corretoras, pagamentos, Pix ou transferências bancárias. `mark_expense_paid` registra data e forma de pagamento informado pelo usuário. Revise os dados e a confirmação apresentada pelo cliente antes de autorizar uma gravação.

Na carteira, `totalWallet` representa capital investido e `totalWalletReal` representa valor atual; snapshots históricos se referem às respectivas datas.

## Suporte e privacidade

- Suporte: https://cartena.com.br/help
- Política de privacidade: https://cartena.com.br/privacy
- Termos: https://cartena.com.br/terms

## Validação do pacote

O manifesto e os caminhos podem ser verificados localmente como JSON. A conexão OAuth e a execução de ferramentas precisam ser validadas no Cursor antes de declarar a integração testada nesse cliente.
