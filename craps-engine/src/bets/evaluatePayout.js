import { betType } from './betType';
import { mergeDefinedProperties } from '../utils';
import { passBetEvaluator } from './passLine/passBetEvaluator';
import { passOddsBetEvaluator } from './odds/passOddsBetEvaluator';
import { dontPassBetEvaluator } from './passLine/dontPassBetEvaluator';
import { dontPassOddsBetEvaluator } from './odds/dontPassOddsBetEvaluator';
import { dontComeBetEvaluator } from './come/dontComeBetEvaluator';
import { comeBetEvaluator } from './come/comeBetEvaluator';

export const evaluatePayout = (bets, rollResult) => {
  return bets.map(x => {
    let betMetadata = {};
    switch (x.type) {
      case betType.pass:
        betMetadata.payout = passBetEvaluator(rollResult.outcome, x.amount);
        break;
      case betType.passOdds:
        betMetadata.payout = passOddsBetEvaluator(rollResult.value, rollResult.outcome, x.amount);
        break;
      case betType.dontPass:
        betMetadata.payout = dontPassBetEvaluator(rollResult.value, rollResult.outcome, x.amount);
        break;
      case betType.dontPassOdds:
        betMetadata.payout = dontPassOddsBetEvaluator(rollResult.value, rollResult.outcome, x.amount);
        break;
      case betType.come:
        betMetadata = comeBetEvaluator(rollResult.value, x.amount, x.point);
        break;
      case betType.dontCome:
        betMetadata = dontComeBetEvaluator(rollResult.value, x.amount, x.point);
        break;
      default:
        break;
    };
    return mergeDefinedProperties(betMetadata, x);
  })
}