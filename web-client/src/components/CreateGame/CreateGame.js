import React from 'react';
import { useGameState } from '../../context';

export const CreateGame = () => {
  const [name, setName] = React.useState('');
  const [chips, setChips] = React.useState('');
  const { game: { createGame } } = useGameState();
  return (
    <div data-testid='CreateGame'>
      <div>Create Game</div>
      <div>
        Name
        <input
          type='text'
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        Starting Chips
        <input
          type='text'
          onChange={e => setName(e.target.value)}
        />
      </div>
    </div>
  );
};
