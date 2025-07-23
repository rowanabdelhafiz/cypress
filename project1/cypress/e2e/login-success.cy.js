describe('Successful Login Test', () =>{
    it('logs in with valid credentials', ()=> {
        
        cy.login('student','Password123')

        cy.url().should('include', '/logged-in-successfully/')
        cy.contains('Congratulations student. You successfully logged in!').should('be.visible')
    })
})