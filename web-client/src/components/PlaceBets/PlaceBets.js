import React from 'react';
import { useGameDispatch, useGameState } from '../../context';

export const PlaceBets = (props) => {
  const { game: { placeBet, addChips }, playerId } = useGameState();
  const dispatch = useGameDispatch();
  const handleClick = (event) => {
    const amount = 10;
    dispatch({type: 'setBalance', payload: addChips(playerId, -amount)});
    dispatch({ type: 'setBets', payload: placeBet(playerId, 'pass', amount) });
  }
  return (
    <div>
      <div className='BetsHeader'>Place Bets</div>
      <div id='PassLine'>
        <button onClick={handleClick}>Pass Line </button>
      </div>
      {/* <div id='PassLineOdds'>
        <button onClick={handleClick}>Pass Line Odds</button>
      </div> */}
    </div>
  )
}