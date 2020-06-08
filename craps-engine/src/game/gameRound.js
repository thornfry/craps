import { shoot, rollOutcomes } from '../shooter';
import { evaluatePayout } from '../bets';

export const gameRound = () => {
  let point;
  let rollResult;
  const rollAndPayout = (bets) => {
    rollResult = shoot(point);
    if (rollResult.outcome === rollOutcomes.pointEstablished) {
      point = rollResult.value;
    } else if (rollResult.outcome === rollOutcomes.pointNotMade) {
      // do nothing
    } else {
      point = undefined;
    }
    const updatedBets = evaluatePayout(bets, rollResult);
    return updatedBets;
  }
  return {
    rollAndPayout,
    getPoint: () => point,
    getLastRoll: () => rollResult
  }
}