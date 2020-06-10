import React from 'react';
import { CreateGame } from './CreateGame';
import { render } from '@testing-library/react';
import { wrapInContext } from '../HOC/wrapInContext';

describe('CreateGame', () => {
  it('should render', () => {
    render(wrapInContext(<CreateGame />));
  });
});
