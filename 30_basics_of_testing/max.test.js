const fnMaxElement = require('./max');

describe('test max значення масиву', () => {
    it('should return 3 if the arrays max value is 3', () => {
      expect(fnMaxElement([1, 0, 3])).toBe(5);
    });
  });