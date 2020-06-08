import { rollOutcomes } from '../shooter';

export const dontPassBetEvaluator = (roll, rollOutcome, betAmount) => {
  switch (rollOutcome) {
    case rollOutcomes.win:
    case rollOutcomes.pointMade:
      return 0;
    case rollOutcomes.craps:
      return roll[0] + roll[1] === 12 ? betAmount : 2 * betAmount;
    case rollOutcomes.lose:
      return 2 * betAmount
    default:
      return;
  }
}