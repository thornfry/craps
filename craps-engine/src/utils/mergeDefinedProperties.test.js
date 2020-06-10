import { mergeDefinedProperties } from './mergeDefinedProperties';

describe('mergeDefinedProperties', () => {
  it('should merge in whole source obj if all properties are defined', () => {
    const source = {
      a: 12,
      b: 'alabama'
    }
    const target = {
      c: 'hi',
      d: 199
    }
    const expected = {
      a: 12,
      b: 'alabama',
      c: 'hi',
      d: 199
    }
    const actual = mergeDefinedProperties(source, target);
    expect(actual).toEqual(expected);
  });
  it('should merge in nothing if all properties in source are undefined', () => {
    const source = {
      a: undefined,
      b: undefined
    }
    const target = {
      c: 'hi',
      d: 199
    }
    const actual = mergeDefinedProperties(source, target);
    expect(actual).toEqual(target);
  });
  it('should not affect undefined properties of target object', () => {
    const source = {
      a: 12,
      b: 'alabama'
    }
    const target = {
      c: 'hi',
      d: undefined
    }
    const expected = {
      a: 12,
      b: 'alabama',
      c: 'hi',
      d: undefined
    }
    const actual = mergeDefinedProperties(source, target);
    expect(actual).toEqual(expected);
  });
  it('should prefer properties of source object over target', () => {
    const source = {
      a: 12,
      b: 'alabama'
    }
    const target = {
      a: 'hi',
      d: 199
    }
    const expected = {
      a: 12,
      b: 'alabama',
      d: 199
    }
    const actual = mergeDefinedProperties(source, target);
    expect(actual).toEqual(expected);
  });
});