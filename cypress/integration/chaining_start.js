/// <reference types="cypress" />

beforeEach(() => {

  cy.visit('/board/68665933327')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="list"]')
    .eq(2)
    .should('be.visible')

});