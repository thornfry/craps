import React from 'react';
import { useGameState } from '../../context'
export const GameState = () => {
  const { rollResult, bets, balance } = useGameState();
  return (
    <>
      <div>Dice: {JSON.stringify(rollResult.roll)}</div>
      <div>Outcome: {rollResult?.outcome}</div>
      <div>Bets: {JSON.stringify(bets)}</div>
      <div>Balance: {balance}</div>
    </>
  )
}