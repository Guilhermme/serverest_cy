/* eslint-disable no-unused-expressions */
import { createUser } from '../../support/factories/user.factory'

describe('Atualização de usuário', () => {

  it('Deve criar um novo usuário ao informar um ID inexistente', () => {

    const usuario = createUser()

    cy.request({
      method: 'PUT',
      url: `${Cypress.expose('url_serve_rest')}/usuarios/nao_inexistente`,
      body: usuario
    }).then((response) => {

      expect(response.status).to.eq(201)

      expect(response.body.message)
        .to.eq('Cadastro realizado com sucesso')

      expect(response.body._id).to.exist

    })
  })
})
