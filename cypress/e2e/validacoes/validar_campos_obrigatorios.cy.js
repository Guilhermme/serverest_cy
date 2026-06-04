import { createUser } from '../support/factories/user.factory'

describe('Validação de campos obrigatórios', () => {

  it('Não deve permitir cadastro sem nome', () => {

    const usuario = createUser({
      nome: ''
    })

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.nome).to.eq('nome não pode ficar em branco')

    })
  })

  it('Não deve permitir cadastro sem email', () => {

    const usuario = createUser({
      email: ''
    })

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.email).to.eq('email não pode ficar em branco')

    })
  })

  it('Não deve permitir cadastro sem password', () => {

    const usuario = createUser({
      password: ''
    })

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.password).to.eq('password não pode ficar em branco')

    })
  })

  it('Não deve permitir cadastro sem administrador', () => {

    const usuario = createUser({
      administrador: ''
    })

    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.administrador).to.eq("administrador deve ser 'true' ou 'false'")

    })
  })
})
