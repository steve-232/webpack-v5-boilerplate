import sum from '../sum';

describe('sum', () => {
  it('should return the sum of two passed numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return zero if arguments are not passed', () => {
    expect(sum()).toBe(0);
  });

  it('should return an error if one of the arguments is not a number', () => {
    expect(() => sum('a', 1)).toThrow(Error);
    expect(() => sum(1, 'a')).toThrow(Error);
    expect(() => sum('a', 'a')).toThrow(Error);
  });
});
