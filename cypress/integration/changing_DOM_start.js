/// <reference types="cypress" />


describe('Changing the DOM tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Star is visible when invoked', () => {
    cy
      .get('[data-cy="star"]')
      .invoke('show')
      .should('be.visible')
  })

  it('Star is visible on mouseover', () => {
    cy
      .get('[data-cy=board-item]')
      .trigger('mouseover')
  })

  it('Star is not visible on mouseout', () => {
    
  })
})

