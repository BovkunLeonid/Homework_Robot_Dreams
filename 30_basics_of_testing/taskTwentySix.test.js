// HomeTask 26 test
const funCons = require('./taskTwentySix');

describe('test методів increment та decrement', () => {
    it('має повернути 101 якщо викликати метод increment', () => {
      expect(funCons.accumVarta.increment()).toBe(101);
    });

    it('має повертати на 1 меньше від 100 при кожному виклику метода decrement', () => {
        expect(funCons.accumVarta.decrement()).toBe(100);
        expect(funCons.accumVarta.decrement()).toBe(99);
        expect(funCons.accumVarta.decrement()).toBe(98);
    });
});

describe('test методів increment, decrement та clear', () => {
    it('метод increment має збільшити до 151', () => {
      expect(funCons.accumDuracell.increment()).toBe(151);
    });

    it('метод increment має збільшити до 152', () => {
        expect(funCons.accumDuracell.increment()).toBe(152);
    });

    it('метод clear має обнулити всі зміни до 150', () => {
        expect(funCons.accumDuracell.clear()).toBe(150);
    });

    it('метод decrement має зменшити до 149', () => {
        expect(funCons.accumDuracell.decrement()).toBe(149);
    });
});