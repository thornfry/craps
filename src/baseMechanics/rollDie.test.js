import rollDie from './rollDie';

describe('rollDie', () => {
  const testDieFaces = 10;
  const testRolls = [];
  for (let i = 0; i < 50; i++) {
    testRolls.push(rollDie(testDieFaces));
  }
  it('should return an integer', () => {
    const allRollsAreIntegers = testRolls
      .filter(x => !Number.isInteger(x))
      .length === 0;
    expect(allRollsAreIntegers).toBe(true);
  });
  it('should never return zero', () => {
    const allRollsAreNonZero = testRolls
      .filter(x => !x)
      .length === 0;
    expect(allRollsAreNonZero).toBe(true);
  });
  it('should return a number between zero and the dieFaces specified', () => {
    const allRollsAreBetweenZeroAndTestDieFaces = testRolls
      .filter(x => !(0 < x < testDieFaces))
      .length === 0;
    expect(allRollsAreBetweenZeroAndTestDieFaces).toBe(true);
  });
});
