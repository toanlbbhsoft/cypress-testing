import React from 'react';
import App from '../App';
import {mount} from 'cypress/react';
import TodoContexProvider from '../store/todo-context';

describe('Render app', () => {
  beforeEach(() => {
    cy.viewport(900, 800)
  })
  it('mounts', () => {
   
    mount(<TodoContexProvider><App /></TodoContexProvider>);
  });
});
