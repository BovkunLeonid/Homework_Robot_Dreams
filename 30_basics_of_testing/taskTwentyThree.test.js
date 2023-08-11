// HomeTask 23 test

const myTwentyThree = require('./taskTwentyThree');

describe('test max значення масиву', () => {
    it('має повернути 21 якщо максимальне значення масиву 21', () => {
        expect(myTwentyThree.fnMaxElement([1, 21, 5])).toBe(21);
    });

    it('має повернути 25 якщо максимальне значення масиву 25', () => {
        expect(myTwentyThree.fnMaxElement([25, 21, 5])).toBe(25);
    });

    it('має повернути 45 якщо максимальне значення масиву 45', () => {
        expect(myTwentyThree.fnMaxElement([1, 21, 45])).toBe(45);
    });
});

describe('test min значення масиву', () => {
  it('має повернути 2 якщо мінімальне значення масиву 2', () => {
      expect(myTwentyThree.fnMinElement([10, 2, 5])).toBe(2);
  });

  it('має повернути 2 якщо мінімальне значення масиву 5', () => {
      expect(myTwentyThree.fnMinElement([22, '', 5])).toBe(5);
  });
});

describe('test сума цифрових значень масиву', () => {
  it('має повернути 27 якщо масив 1, 21, 5', () => {
    expect(myTwentyThree.findSumOfArrayOne([1, 21, 5])).toBe(27);
  });
});

describe('test сума цифрових значень масиву 2', () => {
  it('має повернути 9 якщо масив 2, 2, 5', () => {
    expect(myTwentyThree.findSumOfArray([2, 2, 5])).toBe(9);
  });
});