describe('assets flow', () => {
    before('login', () => {
        cy.login()
    })
    it('create asset', () => {
        const assetName = 'test plot 1'
        cy.get('[data-cy=create-asset-button]').click()

        cy.url().should('include', '/assets/create')

        // add name

        cy.get('[name="name"]')
            .type(assetName)
            .should('have.value', 'test plot 1')
        // add location


        cy.get('[name="location"]')
            .type('nairobi')
            .should('have.value', 'nairobi')
        // submit
        cy.get('.umami--click--create-asset-button').click()
        cy.url().should('include', '/assets')

        // click asset and go to detail page

        cy.get('tbody > :nth-child(1) > :nth-child(2) > div').click()
        cy.get('.align-self-center').should('contain', assetName)

        cy.get('[style="padding: 1em 1rem 0px;"] > :nth-child(2) > .btn').click()
        cy.url().should('include', '/edit')

        cy.get('[name="name"]')
            .should('have.value', assetName)

        cy.get('[name="name"]')
            .clear()
            .type('javahouse')
            .should('have.value', 'javahouse')

            cy.get('[name="location"]')
            .clear()
            .type('newyork')
            .should('have.value', 'newyork')

            cy.get('.umami--click--create-asset-button').click()
            cy.url().should('include', '/assets')
            cy.visit('')
    })
})