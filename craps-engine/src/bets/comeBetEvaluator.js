import { isNumberInSet } from '../utils/isNumberInSet';

export const comeBetEvaluator = (roll, betAmount, point) => {
  let establishedPoint = point;
  let payout;
  if (!point) {
    if (isNumberInSet(roll, [7, 11])) {
      payout = 2 * betAmount;
    } else if (isNumberInSet(roll, [2, 3, 12])) {
      payout = 0;
    } else {
      establishedPoint = roll;
    }
  } else {
    if (roll === 7) {
      payout = 0;
    } else if (roll === point) {
      payout = 2 * betAmount;
    }
  }
  return {
    point: establishedPoint,
    payout
  };
}