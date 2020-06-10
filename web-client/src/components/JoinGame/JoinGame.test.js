import React from 'react';
import { JoinGame } from './JoinGame';
import { render } from '@testing-library/react';

describe('JoinGame', () => {
  it('should render', () => {
    render(<JoinGame />);
  });
});
