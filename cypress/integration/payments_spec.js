describe('payment flow', () => {
    before('login', () => {
        cy.login()
    })

    it('create house with tenant', () => {


        const houseName = 'house 1'
        // const house2 = 'house 2'
        const assetName = 'test plot 1'

        cy.createAsset(assetName)

        cy.get(':nth-child(1) > .d-flex > .btn').click()

        cy.get('.d-flex > :nth-child(2) > .form-control').click()
            .type(houseName)
            .should('have.value', houseName)

            cy.get('#exampleCheck1').check()
            cy.get('#exampleCheck1').uncheck()

            cy.get('.umami--click--create-house-button').click()
            cy.get('.d-md-flex.justify-content-between > .align-self-center').should('contain', houseName)

            // cy.get('[data-cy=edit-house]').click()

            // cy.get(':nth-child(2) > .form-control')
            // .clear()
            // .type('house 2')
            // .should('have.value', house2)

            // cy.get('[data-cy=submit-house]').click()
            // cy.get('.d-md-flex.justify-content-between > .align-self-center').should('contain', house2)

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


            // cy.get('.umami--click--delete-tenant-url').click()
            // cy.get('.umami--click--delete-tenant-button').click()
            // cy.get('.d-md-flex > :nth-child(1) > :nth-child(2) > :nth-child(4)').should('contain','empty')

            cy.get('.umami--click--create-payment-url').click()
            cy.get('#type').select("MPESA")
            cy.get(':nth-child(2) > .form-control').click()
            .clear()
            .type('cf342ki7hyt91')
            .should('have.value', 'cf342ki7hyt91')

            cy.get('#startDate').click()
            .clear()
            .type('12/2020')
            .should('have.value', '12/2020')

            cy.get('#datePayed').click()
            .clear()
            .type('12/01/2020')
            .should('have.value', '12/01/2020')

            cy.get('#rentAmount').click()
            .clear()
            .type('3500')
            .should('have.value', '3500')

            cy.get('.tenantFormButton > .btn').click()
            cy.get('tbody > tr > :nth-child(2)').should('contain', 'December 1, 2020')

            cy.visit('')




    })







})
