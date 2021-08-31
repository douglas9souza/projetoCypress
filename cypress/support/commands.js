import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('douglasdominguesdesouza@gmail.com')
            cy.get('input[type="password"]').type('17122006')
            cy.root().submit() //apenas quando o botão é do tipo submit
        })    
        cy.contains('Your Feed', {timeout:15000}).should('be.visible')
})