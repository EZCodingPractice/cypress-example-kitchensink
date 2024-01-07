/// <reference types="cypress" />

context('Testing plugins', () => {
    beforeEach(() => {
        // cy.visit('https://www.example.com')
    })

    it('test the apply() method', () => {
        const double = (n) => n * 2
        cy.wrap(100).apply(double).should('equal', 200)
    })

    /***
     * partial()
     * Sometimes you have the callback to apply, and you know the first argument(s), and just need to put the subject
     * at the last position. This is where you can partially applyt the known arguments to the given callback.
     */

    it('tests the partial() method', () => {
        cy.wrap(100).partial(Cypress._.add, 5).should('equal', 105)
        cy.wrap(100)
            .apply((subject) => Cypress._.add(5, subject))
            .should('equal', 105)
    })

    /***
     * map()
     * Transforms every object in the given collection by running it through the given callback function. Can also
     * map each object to its property. An object could be an array or a jQuery object.
     */
    it('tests the map() method', () => {
        cy.wrap(['10', '20', '30'])
            .map(Number)
            .then((data) => {
                console.log(data)
                expect(data).length(3)
                expect(data[1]).to.equal(20)
            }) // [10, 20, 30]
    })
})
