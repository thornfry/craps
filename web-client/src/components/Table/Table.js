import React from 'react';
import table from '../../table1280x640.png';
import { useStyles } from './Table.styles';
import { useGameDispatch, useGameState } from '../../context';

export const Table = () => {
  const classes = useStyles({});
  const { game: { placeBet, addChips }, playerId } = useGameState();
  const dispatch = useGameDispatch();
  const handleClick = (event) => {
    const amount = 10;
    dispatch({type: 'setBalance', payload: addChips(playerId, -amount)});
    dispatch({ type: 'setBets', payload: placeBet(playerId, event.target.alt, amount) });
  }
  return (
    <div className={classes.container}>
      <div>
        <img src={table} alt='Workplace' useMap='#tableMap' />
      </div>
      <map name='tableMap'>
        <area shape='rect' coords='164, 202, 759, 298' alt='come' onClick={handleClick} />
        <area shape='rect' coords='122, 462, 759, 518' alt='pass' onClick={handleClick} />
        <area shape='rect' coords='264, 402, 759, 457' alt='dontPass' onClick={handleClick} />
        <area shape='rect' coords='43, 123, 114, 439' alt='pass' onClick={handleClick} />
        <area shape='rect' coords='164, 202, 759, 298' alt='dontPass' onClick={handleClick} />
        <area shape='rect' coords='164, 202, 759, 298' alt='field' onClick={handleClick} />
        <area shape='rect' coords='164, 42, 259, 197' alt='dontCome' onClick={handleClick} />
      </map>
    </div>
  )
}