/// <reference types="cypress" />

beforeEach(() => {

  cy.visit('/board/67714408839')
})

it('Multiple assertions', () => {

  // cy
  //   .get('[data-cy=tasks-list]')
  //   .eq(0)
  //   .should('contain.text', 'bread')

  // cy
  //   .get('[data-cy=tasks-list]')
  //   .eq(0)
  //   .should('contain.text', 'milk')
  
  cy
    .get('[data-cy=task]')
    .should((item) => {
		  expect(item[0]).to.contain.text('bread')
		  expect(item[1]).to.contain.text('milk')
	})

})