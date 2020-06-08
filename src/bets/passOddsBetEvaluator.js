import { rollOutcomes } from '../shooter';
import { getOddsForPoint } from '../baseMechanics';

export const passOddsBetEvaluator = (roll, rollOutcome, betAmount) => {
  switch (rollOutcome) {
    case rollOutcomes.pointMade:
      return getOddsForPoint(roll[0] + roll[1]) * betAmount;
    case rollOutcomes.lose:
      return 0;
    default:
      return;
  }
}