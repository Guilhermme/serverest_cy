import { createUser } from '../support/factories/user.factory'

describe('Teste na API serverest.dev', () => {

  it('Deve realizar CRUD completo de usuário', () => {

    const usuario = createUser()

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario
    }).then((response) => {

      expect(response.status).to.eq(201)

      const userId = response.body._id

      // Consulta o usuário recém-criado
      return cy.request({
        method: 'GET',
        url: `${Cypress.expose('url_serve_rest')}/usuarios/${userId}`
      }).then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body.nome).to.eq(usuario.nome)
        expect(response.body.email).to.eq(usuario.email)
        expect(response.body.administrador).to.eq(usuario.administrador)

        // Atualiza os dados do usuário criado
        return cy.request({
          method: 'PUT',
          url: `${Cypress.expose('url_serve_rest')}/usuarios/${userId}`,
          body: {
            ...usuario,
            nome: 'Usuário Atualizado'
          }
        })

      }).then((response) => {

        expect(response.status).to.eq(200)

        // Deletar o usuário criado
        return cy.request({
          method: 'DELETE',
          url: `${Cypress.expose('url_serve_rest')}/usuarios/${userId}`
        })

      }).then((response) => {

        expect(response.status).to.eq(200)

      })
    })
  })
})
