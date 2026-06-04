describe('Busca de usuário', () => {

  it('Deve retornar erro ao buscar usuário inexistente', () => {

    const usuarioIdInexistente = '8dsa987dsa98d7a9'

    cy.request({
      method: 'GET',
      url: `${Cypress.expose('url_serve_rest')}/usuarios/${usuarioIdInexistente}`,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('Usuário não encontrado')

    })
  })

  it('Deve retornar erro ao buscar usuário com ID inválido', () => {

    const usuarioIdInexistente = 'id_inexistente'

    cy.request({
      method: 'GET',
      url: `${Cypress.expose('url_serve_rest')}/usuarios/${usuarioIdInexistente}`,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400)
      expect(response.body.id).to.eq('id deve ter exatamente 16 caracteres alfanuméricos')

    })
  })
})
