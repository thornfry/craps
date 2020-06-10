import React from 'react';
import { GameStateProvider } from '../../context';

export const wrapInContext = (component) => {
  return (
    <GameStateProvider>
        {component}
    </GameStateProvider>
  );
};
