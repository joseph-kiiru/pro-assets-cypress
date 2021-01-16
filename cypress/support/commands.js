// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => { 
    cy.visit('')
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
//
//
// -- This is a child command --
Cypress.Commands.add("createAsset", (assetName) => {
    cy.get('[data-cy=create-asset-button]').click({force: true})

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

})

// Cypress.Commands.add("createHouse", (assetName) => {

// })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
