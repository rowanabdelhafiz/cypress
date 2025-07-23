describe('Contact Form Test', () => {
  // Ignore JS errors from the site
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('submits the contact form successfully', () => {
    cy.visit('https://www.globalsqa.com/samplecontact-form/')

    cy.get('#Contact Us').click()
    cy.get('input[name="comment_name"]').type('Rina')
    cy.get('input[name="email"]').type('rina@test.com')
    cy.get('input[name="subject"]').type('Cypress Form Test')
    cy.get('textarea[name="comment"]').type('This is a test using Cypress.')
    cy.get('input[type="submit"]').click()

    cy.wait(3000)

    cy.contains('Feedback').should('exist')
  })
})
