import { evaluatePayout } from './evaluatePayout';
import { betType } from './betType';
import { rollOutcomes } from '../shooter';

describe('evaluatePayout', () => {
  it('should add payout to completed winning bets', () => {
    const testRoll = {
      roll: [1, 3],
      value: 4,
      outcome: rollOutcomes.pointMade
    }
    const bet = {
      id: 123,
      playerId: 0,
      type: betType.pass,
      amount: 10
    }
    const actual = evaluatePayout([bet], testRoll);
    expect(actual).toEqual([{ ...bet, payout: 20 }])
  });
  it('should add payout to completed losing bets', () => {
    const testRoll = {
      roll: [1, 4],
      value: 5,
      outcome: rollOutcomes.pointMade
    }
    const bet = {
      id: 123,
      playerId: 0,
      type: betType.dontPass,
      amount: 10
    }
    const actual = evaluatePayout([bet], testRoll);
    expect(actual).toEqual([{ ...bet, payout: 0 }])
  });
});