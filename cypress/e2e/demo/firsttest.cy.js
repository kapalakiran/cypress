describe('First Test', () => {


    it('Verify Title', () => {
        cy.visit("https://reqres.in/");
        cy.title().should('eq','Reqres - A hosted REST-API ready to respond to your AJAX requests')
    })
})