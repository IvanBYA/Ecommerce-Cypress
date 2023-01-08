describe('Api testing con Cypress', function () {
  it('GET all products list', () => {
    cy.request({
      method : 'GET',
      url : '/api/productsList'
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  })

  it('POST to all Products list', () => {
    cy.request({
      method : 'POST',
      url : 'api/productsList',
      body : {
        "responseCode" : 405,
        "message" : "This request method is not supported."
      }
    }).as('productsList');

    cy.get('@productsList').should((response) => {
      expect(response.body).to.have.property('responseCode', 405);
      expect(response.body).to.have.property('message', 'This request method is not supported.');
    })
  })
})