import { rollOutcomes } from '../shooter';
import { getOddsForPoint } from '../baseMechanics';

export const dontPassOddsBetEvaluator = (roll, rollOutcome, betAmount) => {
  switch (rollOutcome) {
    case rollOutcomes.lose:
      return (1 + getOddsForPoint(roll[0] + roll[1], true)) * betAmount;
    case rollOutcomes.pointMade:
      return 0;
    default:
      return;
  }
}