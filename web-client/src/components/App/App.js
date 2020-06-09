import { Container } from '@material-ui/core';
import { Table } from '../Table/Table';
import { GameState } from '../GameState/GameState';
import { GameStateProvider } from '../../context';
import { Roll } from '../Roll/Roll';
import React from 'react';

function App() {
  return (
    <GameStateProvider>
      <div className="App">
        <Container maxWidth='md'>
          Hello World
        <Table />
        <GameState />
        <Roll />
        </Container>
      </div>
    </GameStateProvider>
  );
}

export default App;
