import { GameState } from './GameState';
import { GameStateProvider } from '../../context';
import { render } from '@testing-library/react';
import React from 'react';

xdescribe('GameState', () => {
  it('should render dice', () => {
    const { getByText } = render(<GameStateProvider><GameState></GameState></GameStateProvider>)
    expect(getByText('Dice:')).toBeDefined();
  });
  it('should render outcome', () => {
    const { getByText } = render(<GameStateProvider><GameState></GameState></GameStateProvider>)
    expect(getByText('Outcome:')).toBeDefined();
  });
  it('should render bets', () => {
    const { getByText } = render(<GameStateProvider><GameState></GameState></GameStateProvider>)
    expect(getByText('Bets:')).toBeDefined();
  });
  it('should render balance', () => {
    const { getByText } = render(<GameStateProvider><GameState></GameState></GameStateProvider>)
    expect(getByText('Balance:')).toBeDefined();
  });
});