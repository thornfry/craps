import React from 'react';
import { GameInit } from './GameInit';
import { render } from '@testing-library/react';
import { wrapInContext } from '../HOC/wrapInContext';

describe('GameInit', () => {
  it('should render', () => {
    render(wrapInContext(<GameInit />));
  });
});
