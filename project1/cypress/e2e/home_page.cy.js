describe('Home Page Test', () => {
  it('should load the homepage', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})
