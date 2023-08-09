const findSumOfArray = require('./sum');

describe('test суми цифрових значень масиву', () => {
  it('should return 6 when params array', () => {
    expect(findSumOfArray([1, 2, 3])).toBe(6);
  });
});
