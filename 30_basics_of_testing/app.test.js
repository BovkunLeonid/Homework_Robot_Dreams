const findSumOfArray = require('./app');

describe('test fnSumElement function', () => {
  it('should return 3 when params are 1 and 2', () => {
    expect(findSumOfArray([1, 2, 3])).toBe(6);
  });
});




