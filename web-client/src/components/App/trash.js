import { Container } from '@material-ui/core';
import { Table } from '../Table/Table';
import { GameState } from '../GameState/GameState';
import { GameStateProvider } from '../../context';
import { Roll } from '../Roll/Roll';
import React from 'react';

const Trash = () => {
  return (
    <GameStateProvider>
      <div className="App">
        <Container maxWidth='md'>
          <div>Just Testing Components</div>
          <Table />
          <GameState />
          <Roll />
        </Container>
      </div>
    </GameStateProvider>
  );
}

export default Trash;
