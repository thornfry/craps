import { betType } from './betType';
import { passBetEvaluator } from './passBetEvaluator';
import { passOddsBetEvaluator } from './passOddsBetEvaluator';
import { dontPassBetEvaluator } from './dontPassBetEvaluator';
import { dontPassOddsBetEvaluator } from './dontPassOddsBetEvaluator';

export const evaluatePayout = (bets, rollResult) => {
  return bets.map(x => {
    let payout;
    switch (x.type) {
      case betType.pass:
        payout = passBetEvaluator(rollResult.outcome, x.amount);
        break;
      case betType.passOdds:
        payout = passOddsBetEvaluator(rollResult.value, rollResult.outcome, x.amount);
        break;
      case betType.dontPass:
        payout = dontPassBetEvaluator(rollResult.value, rollResult.outcome, x.amount);
        break;
      case betType.dontPassOdds:
        payout = dontPassOddsBetEvaluator(rollResult.value, rollResult.outcome, x.amount);
        break;
    };
    return payout !== undefined ? {...x, payout} : {...x};
  })
}