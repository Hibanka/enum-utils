import { expect } from 'chai';
import { numericEnumEntries, numericEnumKeys, numericEnumValues } from '../src';

describe('index', () => {
  it('numericEnumKeys', () => {
    enum TestEnum {
      A,
      B,
      C,
    }

    const keys = numericEnumKeys(TestEnum);
    expect(keys).eql(['A', 'B', 'C']);
  });

  it('numericEnumKeys with defined nums', () => {
    enum TestEnum {
      A = 1,
      B = 3,
      C = 5,
    }

    const keys = numericEnumKeys(TestEnum);
    expect(keys).eql(['A', 'B', 'C']);
  });

  it('numericEnumValues', () => {
    enum TestEnum {
      A,
      B,
      C,
    }

    const values = numericEnumValues(TestEnum);
    expect(values).eql([0, 1, 2]);
  });

  it('numericEnumValues with defined nums', () => {
    enum TestEnum {
      A = 1,
      B = 3,
      C = 5,
    }

    const values = numericEnumValues(TestEnum);
    expect(values).eql([1, 3, 5]);
  });

  it('numericEnumEntries', () => {
    enum TestEnum {
      A,
      B,
      C,
    }

    const entries = numericEnumEntries(TestEnum);
    expect(entries).eql([
      ['A', 0],
      ['B', 1],
      ['C', 2],
    ]);
  });

  it('numericEnumEntries with defined nums', () => {
    enum TestEnum {
      A = 1,
      B = 3,
      C = 5,
    }

    const entries = numericEnumEntries(TestEnum);
    expect(entries).eql([
      ['A', 1],
      ['B', 3],
      ['C', 5],
    ]);
  });
});
