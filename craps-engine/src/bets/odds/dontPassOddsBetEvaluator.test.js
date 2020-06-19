import { dontPassOddsBetEvaluator } from './dontPassOddsBetEvaluator';
import { rollOutcomes } from '../../shooter';

describe('dontPassOddsBetEvaluator', () => {
  it('should return zero on pointmade', () => {
    const actual = dontPassOddsBetEvaluator([1, 3], rollOutcomes.pointMade, 10);
    expect(actual).toEqual(0);
  });
  it('should return the bet plus 1/2 on 4 or 10 loss', () => {
    expect(dontPassOddsBetEvaluator([1, 3], rollOutcomes.lose, 10)).toEqual(15);
    expect(dontPassOddsBetEvaluator([5, 5], rollOutcomes.lose, 10)).toEqual(15);
  });
  xit('should return the bet plus 2/3 on 5 or 9 loss', () => {
    expect(dontPassOddsBetEvaluator([2, 3], rollOutcomes.lose, 15)).toEqual(25);
    expect(dontPassOddsBetEvaluator([4, 5], rollOutcomes.lose, 15)).toEqual(25);
  });
  it('should return the bet plus 5/6 on 6 or 8 loss', () => {
    expect(dontPassOddsBetEvaluator([3, 3], rollOutcomes.lose, 12)).toEqual(22);
    expect(dontPassOddsBetEvaluator([3, 5], rollOutcomes.lose, 12)).toEqual(22);
  });
});