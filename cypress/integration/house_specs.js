describe('house flow', () => {
    before('login', () => {
        cy.login()
    })

    it('create house without tenant', () => {

        const houseName = 'house 1'
        const house2 = 'house 2'
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

        cy.get(':nth-child(1) > .d-flex > .btn').click()

        cy.get('.d-flex > :nth-child(2) > .form-control').click()
            .type(houseName)
            .should('have.value', houseName)

            cy.get('#exampleCheck1').check()
            cy.get('#exampleCheck1').uncheck()

            cy.get('.umami--click--create-house-button').click()
            cy.get('.d-md-flex.justify-content-between > .align-self-center').should('contain', houseName)

            cy.get('[data-cy=edit-house]').click()

            cy.get(':nth-child(2) > .form-control')
            .clear()
            .type('house 2')
            .should('have.value', house2)

            cy.get('[data-cy=submit-house]').click()
            cy.get('.d-md-flex.justify-content-between > .align-self-center').should('contain', house2)

            cy.get('[data-cy=edit-house]').click()
            cy.get('#exampleCheck1').check()

            const tenant1 = 'tenant 1'

            cy.get('#tenantNames')
            .clear()
            .type(tenant1)
            .should('have.value', tenant1)

            //12/02/2020            
            cy.get('#startDate').type('12/02/2020')
            .should('have.value', '12/02/2020')

            cy.get('#rentAmount').click()
            .clear()
            .type('3500')
            .should('have.value', '3500')

            cy.get('[data-cy=submit-house]').click({force: true})
            cy.get('.d-md-flex > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(2)').should('contain', tenant1)


            cy.get('.umami--click--delete-tenant-url').click()
            cy.get('.umami--click--delete-tenant-button').click()
            cy.get('.d-md-flex > :nth-child(1) > :nth-child(2) > :nth-child(4)').should('contain','empty')
            
    })







})
