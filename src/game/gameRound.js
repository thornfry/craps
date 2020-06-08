import { shoot, rollOutcomes } from '../shooter';
import { evaluatePayout } from '../bets';

export const gameRound = () => {
  let point;
  const getPoint = () => {
    return point;
  }
  const rollAndPayout = (bets) => {
    const rollResult = shoot(point);
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
    getPoint
  }
}