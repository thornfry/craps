import { rollOutcomes } from '../../shooter';
import { dontPassBetEvaluator } from './dontPassBetEvaluator';

describe('dontPassBetEvaluator', () => {
  it('should return double the bet on 2 or 3 craps', () => {
    expect(dontPassBetEvaluator([1, 2], rollOutcomes.craps, 10)).toEqual(20);
    expect(dontPassBetEvaluator([1, 1], rollOutcomes.craps, 10)).toEqual(20);
  });
  it('should return the bet on 12 craps', () => {
    const actual = dontPassBetEvaluator([6, 6], rollOutcomes.craps, 10);
    expect(actual).toEqual(10);
  });
  it('should return 0 on comeout wins', () => {
    const actual = dontPassBetEvaluator([1, 6], rollOutcomes.win, 10);
    expect(actual).toEqual(0);
  });
  it('should return double the bet on lose', () => {
    const actual = dontPassBetEvaluator([1, 6], rollOutcomes.lose, 10);
    expect(actual).toEqual(20);
  });
  it('should return 0 on made point', () => {
    const actual = dontPassBetEvaluator([1, 4], rollOutcomes.pointMade, 10);
    expect(actual).toEqual(0);
  });
  it('should return undefined on point established', () => {
    const actual = dontPassBetEvaluator([1, 4], rollOutcomes.pointEstablished, 10);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined on point not made', () => {
    const actual = dontPassBetEvaluator([1, 4], rollOutcomes.pointNotMade, 10);
    expect(actual).toEqual(undefined);
  });
});