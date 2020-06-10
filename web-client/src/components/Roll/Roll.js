import React from 'react';
import { useGameDispatch, useGameState } from '../../context';

export const Roll = () => {
  const { game, playerId } = useGameState();
  const dispatch = useGameDispatch();
  const handleClick = () => {
    const { rollResult, bets, balance } = game.roll(playerId);
    console.log('client roll: ', rollResult, bets, balance);
    dispatch({ type: 'setRollResult', payload: rollResult });
    dispatch({ type: 'setBets', payload: bets });
    dispatch({ type: 'setBalance', payload: balance });
  }
  return (
    <>
      <button
        type='button'
        onClick={handleClick}
      >
        Roll
    </button>
    </>
  );
}