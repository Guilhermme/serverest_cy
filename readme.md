# ServeRest API

## Objetivo

Este projeto contém testes automatizados para a API ServeRest, cobrindo os principais fluxos de gerenciamento de usuários, validações de negócio e cenários negativos.

## Os testes foram desenvolvidos utilizando:

* Cypress 15.x
* Faker.js
* JavaScript

## CI/CD

O projeto possui integração contínua através do GitHub Actions.

A pipeline é executada automaticamente em:

- Push para branch main
- Pull Requests para branch main

Etapas executadas:

1. Checkout do código
2. Instalação das dependências
3. Execução dos testes Cypress
4. Geração e publicação dos relatórios de execução

Os relatórios ficam disponíveis como artefatos da execução no GitHub Actions.


### 📋 Documentação

* https://serverest.dev


### 📋 Pré-requisitos para usar o projeto

Para instalação do cypress e execução será necessário:

* Node.JS ['>=20.x']
* NPM


### ⚙️ Instalação

Com o projeto `ServeRest API` já clonado.

Instale as dependências via terminal:

```
npm i
```

Execute o comando para concluir a instalação do cypress e exibição da interface:

Escolha o navegador e clique no test para execução!

```
npm run open
```

## 🎲 Executando teste por Features

Comando para executar um arquivo de teste específico em headless:

```
npm run feature **/NAMEFILE.test.js
```

## ✒️ Autor

Guilherme Lima 🚀