import React from 'react';
import { useGameState, useGameDispatch } from '../../context';

export const GameInit = () => {
  const { game: { createGame, addChips } } = useGameState();
  const dispatch = useGameDispatch();

  React.useEffect(() => {
    const playerId = createGame('Player');
    const balance = addChips(playerId, 100);
    dispatch({type: 'setPlayerId', payload: playerId});
    dispatch({type: 'setBalance', payload: balance});
  }, [])
  return (
    <div data-testid='GameInit'></div>
  );
};
