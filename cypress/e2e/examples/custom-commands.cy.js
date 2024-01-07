/// <reference types="cypress" />
// @ts-nocheck

const token = 'abc123'

context('Custom Commands', () => {
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.log('THIS: ', this.data)
        })
        cy.setLocalStorage('token', token)
    })

    it('sets and gets a token from local storage', () => {
        cy.getLocalStorage('token').should('eq', token)
    })

    it('overwrites the type command by using sensitive characters', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').clear().type('someemail@example.com')
        cy.findByPlaceholderText('Email')
            .clear()
            .type('another@example.com', { sensitive: true })
    })
})
