import React from 'react';
import { LinkButton } from '../UIControls/LinkButton';

export const Landing = () => {
  return (
    <div data-testid='Landing'>
      <div data-testid='CreateGameButton'>
        <LinkButton
          location='/create'
          displayText='Create Game'
        />
      </div>
      <div data-testid='JoinGameButton'>
        <LinkButton
          location='/join'
          displayText='Join Game'
        />
      </div>
      <div data-testid='SoloGameButton'>
        <LinkButton
          location='/solo'
          displayText='Solo Game'
        />
      </div>
    </div>
  );
};
