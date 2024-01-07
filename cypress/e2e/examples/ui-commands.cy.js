/// <reference types="cypress" />

context('UI Comands', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('links to the actions page correctly', () => {
        cy.findAllByText('Actions').last().click()
        cy.url().should('include', 'commands/actions')
    })

    it('forces clicking on a hidden element from the navigation bar', () => {
        cy.findAllByText('Actions').first().click({ force: true })
        cy.url().should('include', 'commands/actions')
    })

    it('lets you type in an input field', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email')
            .clear()
            .type('Test')
            .should('have.value', 'Test')
    })
})
