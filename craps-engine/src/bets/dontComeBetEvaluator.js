import { isNumberInSet } from '../utils/isNumberInSet';

export const dontComeBetEvaluator = (roll, betAmount, point) => {
  let establishedPoint = point;
  let payout;
  if (!point) {
    if (isNumberInSet(roll, [7, 11])) {
      payout = 0;
    } else if (isNumberInSet(roll, [2, 3])) {
      payout = 2 * betAmount;
    } else if (isNumberInSet(roll, [12])) {
      payout = betAmount;
    } else {
      establishedPoint = roll;
    }
  } else {
    if (roll === 7) {
      payout = 2 * betAmount;
    } else if (roll === point) {
      payout = 0;
    }
  }
  return {
    point: establishedPoint,
    payout
  };
}