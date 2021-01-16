describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io/')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')


        cy.get('.action-email')
            .type('jkiiru89@gmail.com')
            .should('have.value', 'jkiiru89@gmail.com')


            cy.get('#password1')
            .type('vfxvxvxvcvcxvcx')

            cy.get('.action-clear')
            .type('123456')

    })
})
