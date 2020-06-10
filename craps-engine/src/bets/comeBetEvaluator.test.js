import { comeBetEvaluator } from './comeBetEvaluator';
describe('comeBetEvaluator', () => {
  it('should payout double on 7 before point is established', () => {
    const { payout, point } = comeBetEvaluator(7, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(20);
  });
  it('should payout double on 11 before point is established', () => {
    const { payout, point } = comeBetEvaluator(11, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(20);
  });
  it('should payout 0 on 2 before point is established', () => {
    const { payout, point } = comeBetEvaluator(2, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(0);
  });
  it('should payout 0 on 3 before point is established', () => {
    const { payout, point } = comeBetEvaluator(3, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(0);
  });
  it('should payout 0 on 12 before point is established', () => {
    const { payout, point } = comeBetEvaluator(12, 10);
    expect(point).toEqual(undefined);
    expect(payout).toEqual(0);
  });
  it('should payout double on point made after point is established', () => {
    const { payout, point } = comeBetEvaluator(5, 10, 5);
    expect(point).toEqual(5);
    expect(payout).toEqual(20);
  });
  it('should payout 0 on shooter lose after point is established', () => {
    const { payout, point } = comeBetEvaluator(7, 10, 5);
    expect(point).toEqual(5);
    expect(payout).toEqual(0);
  });
});