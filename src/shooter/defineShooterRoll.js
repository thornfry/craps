import { isNumberInSet } from '../utils';
import { rollOutcomes } from './shooterRollOutcomes';

export const defineShooterRoll = (roll, point) => {
  if (!point) {
    if (isNumberInSet(roll, [7, 11])) { return rollOutcomes.win; }
    if (isNumberInSet(roll, [2, 3, 12])) { return rollOutcomes.craps; }
    return rollOutcomes.pointEstablished;
  } else {
    if (roll === point) { return rollOutcomes.pointMade; }
    if (roll === 7) { return rollOutcomes.lose; }
    return rollOutcomes.pointNotMade;
  }
}
