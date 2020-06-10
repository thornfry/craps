import { dontComeBetEvaluator } from './dontComeBetEvaluator';

describe('dontComeBetEvaluator', () => {
  it('should payout double on 2 before point is established', () => {
    const { payout, point } = dontComeBetEvaluator(2, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(20);
  });
  it('should payout double on 3 before point is established', () => {
    const { payout, point } = dontComeBetEvaluator(3, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(20);
  });
  it('should push on 12 before point is established', () => {
    const { payout, point } = dontComeBetEvaluator(12, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(10);
  });
  it('should payout 0 on 7 before point is established', () => {
    const { payout, point } = dontComeBetEvaluator(7, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(0);
  });
  it('should payout 0 on 11 before point is established', () => {
    const { payout, point } = dontComeBetEvaluator(11, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(0);
  });
  it('should payout double on 7 out after point is established', () => {
    const { payout, point } = dontComeBetEvaluator(7, 10, 5);
    expect(point).toEqual(5);
    expect(payout).toEqual(20);
  });
  it('should payout 0 on shooter rolls dontCome point', () => {
    const { payout, point } = dontComeBetEvaluator(5, 10, 5);
    expect(point).toEqual(5);
    expect(payout).toEqual(0);
  });
});