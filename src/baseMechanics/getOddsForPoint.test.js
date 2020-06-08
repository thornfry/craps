import { getOddsForPoint } from './getOddsForPoint';

describe('getOddsForPoint', () => {
  describe('for', () => {
    it('should return 2 for 4 and 10', () => {
      expect(getOddsForPoint(4)).toEqual(2);
      expect(getOddsForPoint(10)).toEqual(2);
    });
    it('should return 1.5 for 5 and 9', () => {
      expect(getOddsForPoint(5)).toEqual(1.5);
      expect(getOddsForPoint(9)).toEqual(1.5);
    });
    it('should return 1.2 for 6 and 8', () => {
      expect(getOddsForPoint(6)).toEqual(1.2);
      expect(getOddsForPoint(8)).toEqual(1.2);
    });
  });
  describe('against', () => {
    it('should return .5 for 4 and 10', () => {
      expect(getOddsForPoint(4, true)).toEqual(.5);
      expect(getOddsForPoint(10, true)).toEqual(.5);
    });
    it('should return 2/3 for 5 and 9', () => {
      expect(getOddsForPoint(5, true)).toEqual(2/3);
      expect(getOddsForPoint(9, true)).toEqual(2/3);
    });
    it('should return 5/6 for 6 and 8', () => {
      expect(getOddsForPoint(6, true)).toEqual(5/6);
      expect(getOddsForPoint(8, true)).toEqual(5/6);
    });
  });
});