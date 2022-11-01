import React from 'react';
import Item from '../components/Item';
import {mount} from 'cypress/react';
import TodoContexProvider from '../store/todo-context';

describe('<Item />', () => {
  beforeEach(() => {
    cy.viewport(900, 800);
  });
  it('mounts', () => {
    mount(
      <TodoContexProvider>
        <Item id='1' text='Test Item' />
      </TodoContexProvider>,
    );
    cy.get('li').should('contain.text', 'Test Item');
  });
  it('Click check box', () => {
    mount(
      <TodoContexProvider>
        <Item id='1' text='Test Item' />
      </TodoContexProvider>,
    );
    cy.get('li .button').click().next().should('have.class', 'line-through');
  });
});
