/// <reference types="cypress" />

context('Fixtures', () => {
    let info

    // beforeEach(() => {
    //     cy.fixture('example').then((data) => {
    //         info = data
    //     })
    // })
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.log('THIS: ', this.data)
            info = data
        })
    })

    it('pulls data from a fixture', () => {
        cy.fixture('example').then((data) => {
            console.log(data)
        })
    })

    it('updates fixtur data inline', () => {
        cy.fixture('example').then((data) => {
            data.email = 'updated@example.com'
            cy.log('UPDATED: ', data)
        })
    })

    it('display info from the variables', () => {
        cy.log(info)
    })

    it('uses fixture data in a network request', function () {
        cy.visit('/commands/network-requests')
        cy.intercept('GET', '**/comments/*', this.data).as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').then((response) => {
            cy.log('RESPONSE: ', response)
        })
    })
})
