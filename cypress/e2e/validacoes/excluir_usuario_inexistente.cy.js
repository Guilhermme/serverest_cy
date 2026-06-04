import { createUser } from '../../support/factories/user.factory'

describe('Exclusão de usuário', () => {

  it('Deve excluir um usuário com sucesso', () => {

    const usuario = createUser()

    // Cria usuário
    cy.request({
      method: 'POST',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      body: usuario
    }).then((response) => {

      const userId = response.body._id

      // Exclui usuário criado
      return cy.request({
        method: 'DELETE',
        url: `${Cypress.expose('url_serve_rest')}/usuarios/${userId}`
      })

    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')

    })
  })
})

describe('Exclusão de usuário', () => {

  it('Deve retornar erro ao excluir usuário inexistente', () => {

    cy.request({
      method: 'DELETE',
      url: `${Cypress.expose('url_serve_rest')}/usuarios/id_inexistente`,
      failOnStatusCode: false
    }).then((response) => {

      console.log(response)

      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Nenhum registro excluído')

    })
  })
})
