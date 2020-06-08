import { defineShooterRoll } from './defineShooterRoll';
import { rollOutcomes } from './shooterRollOutcomes';

describe('defineShooterRoll', () => {
  it('should return win on 7 come out', () => {
    expect(defineShooterRoll(7, undefined)).toEqual(rollOutcomes.win);
  });
  it('should return win on 11 come out', () => {
    expect(defineShooterRoll(11, undefined)).toEqual(rollOutcomes.win);
  });
  it('should return crapout on 2 come out', () => {
    expect(defineShooterRoll(2, undefined)).toEqual(rollOutcomes.craps);
  });
  it('should return crapout on 3 come out', () => {
    expect(defineShooterRoll(3, undefined)).toEqual(rollOutcomes.craps);
  });
  it('should return crapout on 12 come out', () => {
    expect(defineShooterRoll(12, undefined)).toEqual(rollOutcomes.craps);
  });
  it('should return pointEstablished on non 2,3,7,11,12 come out', () => {
    expect(defineShooterRoll(4, undefined)).toEqual(rollOutcomes.pointEstablished);
    expect(defineShooterRoll(5, undefined)).toEqual(rollOutcomes.pointEstablished);
    expect(defineShooterRoll(6, undefined)).toEqual(rollOutcomes.pointEstablished);
    expect(defineShooterRoll(8, undefined)).toEqual(rollOutcomes.pointEstablished);
    expect(defineShooterRoll(9, undefined)).toEqual(rollOutcomes.pointEstablished);
    expect(defineShooterRoll(10, undefined)).toEqual(rollOutcomes.pointEstablished);
  });
  it('should return point made if point is rolled', () => {
    expect(defineShooterRoll(4, 4)).toEqual(rollOutcomes.pointMade);
  });
  it('should return lose on 7 after come out', () => {
    expect(defineShooterRoll(7, 4)).toEqual(rollOutcomes.lose);
  });
  it('should return point not made for non-7 non-points after comeout', () => {
    expect(defineShooterRoll(5, 4)).toEqual(rollOutcomes.pointNotMade);
  });
});