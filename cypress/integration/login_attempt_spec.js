/// <reference types="cypress" />

describe('login attempt', () => {
  it('should redirect to login page if not logged in', () => {
    cy.visit('http://pro-assets.dmwangi.co.ke/')

    cy.contains('type').click()

    cy.url().should('include', '/login')

    cy.get(':nth-child(1) > .form-control')
      .type('test@davy.co.ke')
      .should('have.value', 'test@davy.co.ke')

    cy.get(':nth-child(2) > .form-control')
      .type('password')

    cy.get('.btn').click()
    cy.get('[style="padding: 8px 0px;"] > :nth-child(1)').click()


    cy.url().should('include', '/assets')

  })

  it('should click one asset', () => {
    cy.visit('http://pro-assets.dmwangi.co.ke/')

    cy.contains('type').click()

    cy.url().should('include', '/login')

    cy.get(':nth-child(1) > .form-control')
      .type('test@davy.co.ke')
      .should('have.value', 'test@davy.co.ke')

    cy.get(':nth-child(2) > .form-control')
      .type('password')

    cy.get('.btn').click()
    cy.get('[style="padding: 8px 0px;"] > :nth-child(1)').click()

    cy.get('.d-md-flex.justify-content-between > :nth-child(2) > .btn').click({force: true})

    cy.get('#assets').select('test plot 1')
    cy.get('#type').select('G2')
  })
})

