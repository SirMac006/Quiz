describe('Quiz E2E Test', () => {
  it('allows a user to complete the quiz and view the final score', () => {
    cy.visit('/');
    cy.get('[data-cy=start-quiz-button]').click();
    cy.get('[data-cy=question]').should('have.length', 10);

    // Answer all questions
    cy.get('[data-cy=answer-option]').each(($el, index, $list) => {
      cy.wrap($el).click();
      cy.get('[data-cy=next-question-button]').click();
    });

    // Check final score
    cy.get('[data-cy=final-score]').should('be.visible');
  });
});