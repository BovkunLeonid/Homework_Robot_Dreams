// HomeTask 28 test

const classChange = require('./taskTwentyEight');

describe('test function class', () => {
    it('should добавити class до елементу', () => {
        let img = document.createElement('img');
        classChange(img);
        img.click();
        expect(img.classList.contains('big-img')).toBeTruthy();
    
        img.click();
        expect(img.classList.contains('big-img')).toBeFalsy();
    });
});