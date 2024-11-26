import React from 'react';
import { mount } from 'cypress/react';
import QuizComponent from '../../src/components/QuizComponent';

describe('QuizComponent', () => {
  it('renders the quiz component', () => {
    mount(<QuizComponent />);
    cy.get('[data-cy=quiz-title]').should('contain', 'Tech Quiz');
  });

  it('displays 10 questions', () => {
    mount(<QuizComponent />);
    cy.get('[data-cy=question]').should('have.length', 10);
  });
});