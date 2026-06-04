describe('Teste na API serverest.dev', () => {

  it('Deve listar todos os usuários', () => {

    cy.request({
      method: 'GET',
      url: `${Cypress.expose('url_serve_rest')}/usuarios`,
      failOnStatusCode: false
    }).then((response) => {
      console.log('Resposta:', response)
      expect(response.status).to.eq(200)

      expect(response.body).to.have.property('quantidade')
      expect(response.body).to.have.property('usuarios')

      expect(response.body.usuarios).to.be.an('array')

      expect(response.body.quantidade).to.equal(response.body.usuarios.length)
    })
  })
})
