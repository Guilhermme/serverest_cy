import { createUser } from '../../support/factories/user.factory'

describe('Cadastro de usuário', () => {

  it('Não deve permitir cadastro com e-mail já existente', () => {

    const usuario = createUser()

    // Primeiro cadastro
    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario
    }).then((response) => {

      expect(response.status).to.eq(201)

      // Tentativa de cadastro duplicado
      return cy.request({
        method: 'POST',
        url: `${Cypress.expose('url_serve_rest')}/usuarios`,
        body: usuario,
        failOnStatusCode: false
      })

    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('Este email já está sendo usado')

    })
  })
})
