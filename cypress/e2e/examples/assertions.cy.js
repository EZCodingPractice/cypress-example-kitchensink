/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('/commands/actions')
    })

    it('shows an active class for the current page', () => {
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    })

    it('should not have an active class on inactive pages', () => {
        cy.get('.dropdown-menu')
            .find('li')
            .first()
            .should('not.have.class', 'active')
    })

    it('should not have an active class and have attribute href', () => {
        cy.get('.dropdown-menu')
            .find('li')
            .first()
            .should('not.have.class', 'active')
            .find('a')
            .should('have.attr', 'href', '/commands/querying')
    })
})
