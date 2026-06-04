# Casos de Teste Implementados

## Objetivo

Este documento descreve os cenários automatizados implementados para validação da API ServeRest, bem como os comportamentos identificados durante a execução dos testes.

---

# 1. Listagem de Usuários

### Cenário

Listar todos os usuários cadastrados.

### Endpoint

```http
GET /usuarios
```

### Validações

* Status HTTP 200.
* Existência das propriedades `quantidade` e `usuarios`.
* Consistência entre a quantidade retornada e o tamanho da lista de usuários.

### Objetivo

Garantir que a API retorne corretamente os usuários cadastrados.

---

# 2. CRUD Completo de Usuário

### Cenário

Validar o ciclo completo de gerenciamento de usuários.

### Fluxo

1. Criar usuário.
2. Buscar usuário por ID.
3. Atualizar usuário.
4. Buscar usuário atualizado.
5. Excluir usuário.

### Endpoints

```http
POST /usuarios
GET /usuarios/{id}
PUT /usuarios/{id}
DELETE /usuarios/{id}
```

### Validações

#### Criação

* Status HTTP 201.
* Retorno do ID do usuário criado.

#### Consulta

* Status HTTP 200.
* Nome, e-mail e perfil administrativo compatíveis com os dados enviados.

#### Atualização

* Status HTTP 200.
* Mensagem de atualização retornada pela API.

#### Exclusão

* Status HTTP 200.
* Mensagem de exclusão retornada pela API.

### Objetivo

Garantir que todo o ciclo de vida de um usuário funcione corretamente.

---

# 3. Cadastro com E-mail Duplicado

### Cenário

Não permitir cadastro de usuários utilizando o mesmo e-mail.

### Endpoint

```http
POST /usuarios
```

### Fluxo

1. Criar usuário.
2. Tentar criar novamente utilizando o mesmo e-mail.

### Validações

* Primeiro cadastro retorna HTTP 201.
* Segundo cadastro retorna HTTP 400.
* Mensagem:

```json
{
  "message": "Este email já está sendo usado"
}
```

### Objetivo

Garantir a unicidade do e-mail dos usuários.

---

# 4. Busca de Usuário Inexistente

### Cenário

Consultar um usuário que não existe.

### Endpoint

```http
GET /usuarios/{id}
```

### Validações

* Status HTTP 400.
* Mensagem:

```json
{
  "message": "Usuário não encontrado"
}
```

### Objetivo

Garantir o tratamento adequado para registros inexistentes.

---

# 5. Atualização de Usuário com ID Inexistente

### Cenário

Atualizar um usuário utilizando um ID inexistente.

### Endpoint

```http
PUT /usuarios/{id}
```

### Comportamento Encontrado

Durante a execução dos testes foi identificado que a API não retorna erro para IDs inexistentes.

Quando um ID inexistente é informado, a API cria um novo usuário.

### Resposta Observada

```http
HTTP 201
```

```json
{
  "message": "Cadastro realizado com sucesso",
  "_id": "..."
}
```

### Objetivo

Validar o comportamento real implementado pela API.

### Observação

Esse comportamento difere do padrão REST tradicional, onde normalmente seria esperado um erro 404 ou 400.

---

# 6. Exclusão de Usuário

## Usuário Existente

### Endpoint

```http
DELETE /usuarios/{id}
```

### Validações

* Status HTTP 200.
* Mensagem:

```json
{
  "message": "Registro excluído com sucesso"
}
```

### Objetivo

Garantir a remoção correta de usuários cadastrados.

---

## Usuário Inexistente

### Endpoint

```http
DELETE /usuarios/{id}
```

### Validações

* Status HTTP 200.
* Mensagem:

```json
{
  "message": "Nenhum registro excluído"
}
```

### Objetivo

Validar o comportamento da API ao tentar excluir registros inexistentes.

### Observação

A API não retorna erro para esse cenário.

---

# 7. Validação de Campos Obrigatórios

### Cenário

Garantir que todos os campos obrigatórios sejam validados pela API.

### Endpoint

```http
POST /usuarios
```

---

## Nome Obrigatório

### Payload

```json
{
  "nome": ""
}
```

### Retorno Esperado

```json
{
  "nome": "nome não pode ficar em branco"
}
```

---

## E-mail Obrigatório

### Payload

```json
{
  "email": ""
}
```

### Retorno Esperado

```json
{
  "email": "email não pode ficar em branco"
}
```

---

## Password Obrigatória

### Payload

```json
{
  "password": ""
}
```

### Retorno Esperado

```json
{
  "password": "password não pode ficar em branco"
}
```

---

## Administrador Obrigatório

### Payload

```json
{
  "administrador": ""
}
```

### Retorno Esperado

```json
{
  "administrador": "administrador deve ser 'true' ou 'false'"
}
```

### Objetivo

Garantir a validação dos campos obrigatórios exigidos pela API.

---

# Estratégia de Massa de Teste

Foi adotado o padrão Factory para geração dinâmica de usuários utilizando Faker.

### Benefícios

* Evita conflitos entre execuções.
* Garante unicidade de e-mails.
* Mantém os testes independentes.
* Facilita manutenção e reutilização da massa de dados.

---

# Considerações Finais

Durante a análise da API foram identificados alguns comportamentos específicos:

| Cenário                      | Comportamento Observado                       |
| ---------------------------- | --------------------------------------------- |
| PUT com ID inexistente       | Cria um novo usuário                          |
| DELETE com ID inexistente    | Retorna HTTP 200 e "Nenhum registro excluído" |
| Cadastro duplicado           | Retorna HTTP 400                              |
| Busca de usuário inexistente | Retorna HTTP 400                              |

Todos os testes foram implementados considerando o comportamento real observado na aplicação.
