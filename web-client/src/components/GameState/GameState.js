import React from 'react';
import { useGameState } from '../../context'
export const GameState = () => {
  const { roll, bets, balance } = useGameState();
  return (
    <>
      <div>Dice: {roll?.roll}</div>
      <div>Outcome: {roll?.outcome}</div>
      <div>Bets: {bets}</div>
      <div>Balance: {balance}</div>
    </>
  )
}