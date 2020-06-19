import { rollOutcomes } from '../../shooter';

export const passBetEvaluator = (rollOutcome, betAmount) => {
  switch (rollOutcome) {
    case rollOutcomes.win:
    case rollOutcomes.pointMade:
      return 2 * betAmount;
    case rollOutcomes.craps:
    case rollOutcomes.lose:
      return 0;
    default:
      return;
  }
}