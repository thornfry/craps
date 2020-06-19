import { passBetEvaluator } from './passBetEvaluator';
import { rollOutcomes } from '../../shooter';

describe('passLineEvaluator', () => {
  it('should return double the bet on comeout wins', () => {
    const actual = passBetEvaluator(rollOutcomes.win, 10);
    expect(actual).toEqual(20);
  });
  it('should return double the bet on made point', () => {
    const actual = passBetEvaluator(rollOutcomes.pointMade, 10);
    expect(actual).toEqual(20);
  });
  it('should return zero on lose', () => {
    const actual = passBetEvaluator(rollOutcomes.lose, 10);
    expect(actual).toEqual(0);
  });
  it('should return zero on crapout', () => {
    const actual = passBetEvaluator(rollOutcomes.craps, 10);
    expect(actual).toEqual(0);
  });
  it('should return undefined on point established', () => {
    const actual = passBetEvaluator(rollOutcomes.pointEstablished, 10);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined on point not made', () => {
    const actual = passBetEvaluator(rollOutcomes.pointNotMade, 10);
    expect(actual).toEqual(undefined);
  });
});