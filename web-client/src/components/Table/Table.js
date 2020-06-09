import React from 'react';
import table from '../../table1280x640.png';
import { useStyles } from './Table.styles';

export const Table = (props) => {
  const classes = useStyles({});
  const handleClick = (event) => {
    alert('Clicked ' + event.target.alt);
  }
  return (
    <div className={classes.container}>
      <div>
        <img src={table} alt='Workplace' useMap='#tableMap' />
      </div>
      <map name='tableMap'>
        <area shape='rect' coords='164, 202, 759, 298' alt='Come' onClick={handleClick} />
        <area shape='rect' coords='122, 462, 759, 518' alt='Pass Line' onClick={handleClick} />
        <area shape='rect' coords='264, 402, 759, 457' alt='Dont Pass Bar' onClick={handleClick} />
        <area shape='rect' coords='43, 123, 114, 439' alt='Pass Line' onClick={handleClick} />
        <area shape='rect' coords='164, 202, 759, 298' alt='Dont Pass Bar' onClick={handleClick} />
        <area shape='rect' coords='164, 202, 759, 298' alt='Field' onClick={handleClick} />
        <area shape='rect' coords='164, 42, 259, 197' alt='Dont Come' onClick={handleClick} />
      </map>
    </div>
  )
}