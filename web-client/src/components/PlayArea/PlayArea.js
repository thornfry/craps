import { Table } from '../Table/Table';
import { GameState } from '../GameState/GameState';
import { Roll } from '../Roll/Roll';
import { GameInit } from '../GameInit/GameInit';
import { PlaceBets } from '../PlaceBets/PlaceBets';
import { GameStateProvider } from '../../context';

import React from 'react';

export const PlayArea = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div>
      <GameStateProvider>
        <GameInit />
        <Table />
        <GameState />
        <PlaceBets />
        <Roll />
      </GameStateProvider>
    </div>
  );
}
