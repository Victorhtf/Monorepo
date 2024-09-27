# Somativa Produtos - Turborepo

Este repositório contém o monorepo de produtos da Somativa, utilizando o [Turborepo](https://turbo.build/) para gerenciamento de múltiplos pacotes e aplicativos, incluindo um frontend construído com [Next.js](https://nextjs.org/).

## Visão Geral

O projeto foi desenvolvido com o objetivo de gerenciar de forma eficiente os diferentes produtos oferecidos pela Somativa. Utilizamos uma arquitetura monorepo, facilitando o compartilhamento de código e a manutenção de pacotes comuns entre as aplicações.

### Principais Tecnologias

- **Turborepo**: para gerenciamento do monorepo e otimização do processo de build.
- **Next.js**: framework React utilizado para o frontend das aplicações.
- **TypeScript**: para tipagem estática, aumentando a segurança e a escalabilidade do código.
- **Tailwind CSS**: para estilização com classes utilitárias.
- **Supabase**: para gerenciamento de autenticação e banco de dados (caso esteja usando).

## Estrutura do Repositório

O repositório segue a estrutura do Turborepo, com múltiplos pacotes e aplicativos:

```bash
├── apps
│   └── web           # Aplicação Next.js principal
├── packages
│   ├── ui            # Pacotes compartilhados de componentes UI (ex: Tailwind)
│   └── config        # Configurações compartilhadas, como Tailwind e ESLint
├── turbo.json        # Configurações do Turborepo
├── package.json      # Dependências e scripts principais
└── tsconfig.json     # Configurações TypeScript
```

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 14.x ou superior)
- **Yarn** (versão 1.22 ou superior)

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
yarn install
```

## Rodando o Projeto

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, execute:

```bash
yarn dev
```

Isso irá iniciar o servidor Next.js e o Turborepo irá garantir que os pacotes e dependências compartilhadas estejam sincronizados.

### Build

Para gerar o build de produção:

```bash
yarn build
```

### Outros Scripts

- **Linting**: Verifique o código com ESLint

  ```bash
  yarn lint
  ```

- **Testes**: Execute os testes (caso tenha testes configurados)
  ```bash
  yarn test
  ```
