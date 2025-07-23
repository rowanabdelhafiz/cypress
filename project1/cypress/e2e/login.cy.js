describe('Login Tests', () => {
  beforeEach(() => {
    cy.fixture('user').as('user')
  })

  it('logs in with valid credentials', function () {
    cy.login(this.user.validUser.username, this.user.validUser.password)
    cy.url().should('include', '/inventory.html')
  })

  it('shows error for invalid login', function () {
    cy.login(this.user.invalidUser.username, this.user.invalidUser.password)
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('shows error when fields are empty', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })
})
