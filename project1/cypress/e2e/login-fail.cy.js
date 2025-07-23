describe('Invalid Login Test', () => {
  it('shows error with invalid credentials', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    // Enter wrong username/password
    cy.get('#username').type('invalidUser')
    cy.get('#password').type('wrongPass')

    // Click the login button
    cy.get('#submit').click()

    // Assert that error message appears
    cy.get('#error').should('contain', 'Your username is invalid!')
  })
})
