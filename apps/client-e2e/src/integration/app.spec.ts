import { getGreeting } from '../support/app.po';

describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title of the prices table', () => {
    cy.get('[data-test="header"]').should('have.value','Crypto coins prices')
  });
});
