import React from 'react';
import { useGameDispatch, useGameState } from '../../context';

export const Roll = () => {
  const { game } = useGameState();
  const dispatch = useGameDispatch();
  console.log('dispatch: ', dispatch)
  React.useEffect(() => {
    game.joinGame('Will')
  }, [])
  const handleClick = () => {
    const rollResult = game.roll(0);
    console.log('roll result: ', rollResult);
    dispatch({type: 'update', payload: rollResult})
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