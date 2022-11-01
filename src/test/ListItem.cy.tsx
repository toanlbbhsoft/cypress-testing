import React from 'react';
import {mount} from 'cypress/react';
import ListItems from '../components/ListItems';
import TodoContexProvider from '../store/todo-context';
import {iteratee} from 'cypress/types/lodash';

describe('<ListItem />', () => {
  beforeEach(() => {
    cy.viewport(900, 800);
  });

  it('mounts', () => {
    mount(
      <TodoContexProvider>
        <ListItems status='all' />
      </TodoContexProvider>,
    );
  });

  it('Delete item', () => {
    mount(
      <TodoContexProvider>
        <ListItems status='all' />
      </TodoContexProvider>,
    );
    
    cy.get('li').should('have.length',3)
    cy.get('li:first').click();
    cy.get('li').should('have.length',2)
  });
});
