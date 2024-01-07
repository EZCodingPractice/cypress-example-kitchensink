/// <reference types="cypress" />

context('Hooks', () => {
    before(() => {
        cy.request('https://api.spacexdata.com/v3/missions')
            .its('body')
            .should('have.length', 10)
    })

    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.log('After each hook is here')
    })

    after(() => {
        cy.log('After ALL hooks is here')
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('exist')
    })

    it('renders the correct h1 text', () => {
        cy.get('h1').should('contain.text', 'Kitchen Sink')
    })
})
