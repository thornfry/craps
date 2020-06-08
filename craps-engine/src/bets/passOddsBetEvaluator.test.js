import { passOddsBetEvaluator } from './passOddsBetEvaluator';
import { rollOutcomes } from '../shooter';

describe('passOddsBetEvaluator', () => {
  it('should return zero on lose', () => {
    const actual = passOddsBetEvaluator([1, 6], rollOutcomes.lose, 10);
    expect(actual).toEqual(0);
  });
  it('should return double the bet on 4 or 10 made point', () => {
    expect(passOddsBetEvaluator([1, 3], rollOutcomes.pointMade, 10)).toEqual(20);
    expect(passOddsBetEvaluator([5, 5], rollOutcomes.pointMade, 10)).toEqual(20);
  });
  it('should return 1.5 the bet on 5 or 9 made point', () => {
    expect(passOddsBetEvaluator([2, 3], rollOutcomes.pointMade, 10)).toEqual(15);
    expect(passOddsBetEvaluator([4, 5], rollOutcomes.pointMade, 10)).toEqual(15);
  });
  it('should return 1.2 the bet on 6 or 8 made point', () => {
    expect(passOddsBetEvaluator([3, 3], rollOutcomes.pointMade, 10)).toEqual(12);
    expect(passOddsBetEvaluator([3, 5], rollOutcomes.pointMade, 10)).toEqual(12);
  });
});