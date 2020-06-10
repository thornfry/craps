import React from 'react';
import { Landing } from './Landing';
import { render } from '@testing-library/react';
import { wrapInRouter } from '../HOC/wrapInRouter';

describe('Landing', () => {
  it('should render', () => {
    const { getByTestId } = render(wrapInRouter(<Landing />));
    expect(getByTestId('Landing')).toBeDefined();
  });
  it('should render a create game button', () => {
    const { getByTestId } = render(wrapInRouter(<Landing />));
    expect(getByTestId('CreateGameButton')).toBeDefined();
  });
  it('should render a join game button', () => {
    const { getByTestId } = render(wrapInRouter(<Landing />));
    expect(getByTestId('JoinGameButton')).toBeDefined();
  });
  it('should render a solo game button', () => {
    const { getByTestId } = render(wrapInRouter(<Landing />));
    expect(getByTestId('SoloGameButton')).toBeDefined();
  });
});