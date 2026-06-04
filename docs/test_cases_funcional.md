# Casos de Teste Funcionais

## Módulo: Usuários

---

# CT-001 - Listar usuários cadastrados

### Objetivo

Validar que a API retorna a lista de usuários cadastrados.

### Pré-condições

* API disponível.

### Passos

1. Realizar uma requisição GET para `/usuarios`.

### Resultado Esperado

* Status HTTP 200.
* A resposta deve conter a propriedade `quantidade`.
* A resposta deve conter a propriedade `usuarios`.
* A quantidade informada deve ser compatível com o número de registros retornados.

---

# CT-002 - Cadastrar usuário com sucesso

### Objetivo

Validar o cadastro de um novo usuário.

### Pré-condições

* E-mail não utilizado anteriormente.

### Passos

1. Enviar requisição POST para `/usuarios`.
2. Informar nome válido.
3. Informar e-mail válido.
4. Informar password válida.
5. Informar administrador como `true`.

### Resultado Esperado

* Status HTTP 201.
* Mensagem "Cadastro realizado com sucesso".
* Retorno do identificador do usuário.

---

# CT-003 - Consultar usuário por ID

### Objetivo

Validar a consulta de um usuário existente.

### Pré-condições

* Usuário previamente cadastrado.

### Passos

1. Realizar requisição GET para `/usuarios/{id}`.

### Resultado Esperado

* Status HTTP 200.
* Retornar os dados do usuário correspondente ao ID informado.

---

# CT-004 - Atualizar usuário existente

### Objetivo

Validar a atualização de um usuário.

### Pré-condições

* Usuário previamente cadastrado.

### Passos

1. Realizar requisição PUT para `/usuarios/{id}`.
2. Alterar os dados desejados.

### Resultado Esperado

* Status HTTP 200.
* Mensagem de sucesso.
* Dados atualizados persistidos.

---

# CT-005 - Excluir usuário existente

### Objetivo

Validar a exclusão de um usuário.

### Pré-condições

* Usuário previamente cadastrado.

### Passos

1. Realizar requisição DELETE para `/usuarios/{id}`.

### Resultado Esperado

* Status HTTP 200.
* Mensagem "Registro excluído com sucesso".

---

# CT-006 - Não permitir cadastro com e-mail duplicado

### Objetivo

Garantir que dois usuários não possam compartilhar o mesmo e-mail.

### Pré-condições

* Usuário previamente cadastrado.

### Passos

1. Cadastrar um usuário.
2. Repetir o cadastro utilizando o mesmo e-mail.

### Resultado Esperado

* Status HTTP 400.
* Mensagem "Este email já está sendo usado".

---

# CT-007 - Consultar usuário inexistente

### Objetivo

Validar o comportamento da API para usuários inexistentes.

### Pré-condições

* Nenhuma.

### Passos

1. Realizar requisição GET para `/usuarios/{id}` utilizando um ID inválido.

### Resultado Esperado

* Status HTTP 400.
* Mensagem "Usuário não encontrado".

---

# CT-008 - Atualizar usuário inexistente

### Objetivo

Validar o comportamento da API ao atualizar um usuário inexistente.

### Pré-condições

* Nenhuma.

### Passos

1. Realizar requisição PUT para `/usuarios/{id}` utilizando um ID inexistente.

### Resultado Esperado

* Status HTTP 201.
* Novo usuário criado.

### Observação

Comportamento identificado durante os testes da API.

---

# CT-009 - Excluir usuário inexistente

### Objetivo

Validar a exclusão de usuários inexistentes.

### Pré-condições

* Nenhuma.

### Passos

1. Realizar requisição DELETE para `/usuarios/{id}` utilizando um ID inexistente.

### Resultado Esperado

* Status HTTP 200.
* Mensagem "Nenhum registro excluído".

---

# CT-010 - Validar campo nome obrigatório

### Objetivo

Garantir que o campo nome seja obrigatório.

### Pré-condições

* Nenhuma.

### Passos

1. Enviar requisição POST para `/usuarios`.
2. Informar nome vazio.

### Resultado Esperado

* Status HTTP 400.
* Mensagem "nome não pode ficar em branco".

---

# CT-011 - Validar campo email obrigatório

### Objetivo

Garantir que o campo email seja obrigatório.

### Pré-condições

* Nenhuma.

### Passos

1. Enviar requisição POST para `/usuarios`.
2. Informar email vazio.

### Resultado Esperado

* Status HTTP 400.
* Mensagem "email não pode ficar em branco".

---

# CT-012 - Validar campo password obrigatório

### Objetivo

Garantir que o campo password seja obrigatório.

### Pré-condições

* Nenhuma.

### Passos

1. Enviar requisição POST para `/usuarios`.
2. Informar password vazia.

### Resultado Esperado

* Status HTTP 400.
* Mensagem "password não pode ficar em branco".

---

# CT-013 - Validar campo administrador obrigatório

### Objetivo

Garantir que o campo administrador seja obrigatório.

### Pré-condições

* Nenhuma.

### Passos

1. Enviar requisição POST para `/usuarios`.
2. Informar administrador vazio.

### Resultado Esperado

* Status HTTP 400.
* Mensagem "administrador deve ser 'true' ou 'false'".
