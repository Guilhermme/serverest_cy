# ServeRest API

## Objetivo

Este projeto contém testes automatizados para a API ServeRest, cobrindo os principais fluxos de gerenciamento de usuários, validações de negócio e cenários negativos.

## ✅ Cobertura Implementada

Os testes automatizados contemplam:

- Listagem de usuários
- Cadastro de usuário
- Consulta de usuário por ID
- Atualização de usuário
- Exclusão de usuário
- Cadastro com e-mail duplicado
- Consulta de usuário inexistente
- Atualização de usuário inexistente
- Exclusão de usuário inexistente
- Validação de campos obrigatórios

## Tecnologias Utilizadas:

* Cypress 15.x
* Faker.js
* JavaScript

## 📁 Estrutura do Projeto

```text
cypress
├── e2e
│   ├── crud_usuarios.cy.js
│   ├── listar_usuarios.cy.js
│   └── validacoes
├── fixtures
├── reports
└── support
    └── factories

docs
├── test_cases_functional.md
└── test_strategy.md
```


### 📋 Documentação da API

- https://serverest.dev


## 📚 Documentação Complementar

O projeto possui documentação complementar contendo:

- Estratégia de testes: `docs/test_strategy.md`
- Casos de teste funcionais: `docs/test_cases_functional.md`


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

### Executar os testes pela interface gráfica

Após abrir o Cypress:

1. Selecione o navegador desejado.
2. Clique sobre o arquivo de teste para iniciar a execução.

```
npm run open
```

## 🎲 Executando teste por Features

Comando para executar um arquivo de teste específico em headless:

```
npm run feature **/NAMEFILE.cy.js
```

## 📊 Relatórios de Execução

O projeto utiliza o **Mochawesome** para geração de relatórios HTML dos testes automatizados.

### Executar testes em modo headless

```bash
npm run test:headless
```

### Executar testes e gerar relatório

```bash
npm run test:report
```

### Arquivos gerados

Após a execução, os relatórios serão gerados em:

```text
cypress/reports
├── mochawesome.html
├── mochawesome.json
└── assets
```

### Visualizar relatório localmente

Abra o arquivo abaixo em qualquer navegador:

```text
cypress/reports/mochawesome.html
```

O relatório apresenta:

* Quantidade de testes executados
* Testes aprovados
* Testes reprovados
* Tempo de execução
* Detalhamento das falhas
* Evidências da execução

---

## 🚀 Integração Contínua (CI/CD)

O projeto possui integração contínua através do GitHub Actions.

A pipeline é executada automaticamente em:

* Push para a branch `main`
* Pull Requests para a branch `main`

### Etapas executadas pela pipeline

1. Checkout do código
2. Instalação das dependências
3. Execução dos testes Cypress
4. Geração do relatório Mochawesome
5. Publicação do relatório como artefato

### Acessando os relatórios da pipeline

No GitHub:

```text
Actions
└── Cypress API Tests
    └── Artifacts
        └── mochawesome-report
```

O artefato disponibiliza o relatório HTML completo da execução para download e análise.

## ✒️ Autor

Guilherme Lima 🚀