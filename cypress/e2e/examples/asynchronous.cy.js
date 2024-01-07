/// <reference types="cypress" />

context('Synchronous and Asynchronous Cypress', () => {
    beforeEach(() => {
        cy.visit('/commands/actions')
    })

    it('types into an email field', () => {
        cy.get('#email1')
            .should('exist', true)
            .clear()
            .type('someemail@sample.com')
        cy.wait(2000).then(() => {
            console.log('Fetching data...')  // prints after 2 seconds
            fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())  // converts response to JSON
                .then((data) => {
                    expect(data).length(10)
                    console.log(data)
                })
        })
    })
})
