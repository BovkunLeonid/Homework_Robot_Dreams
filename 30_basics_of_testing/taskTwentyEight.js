// HomeTask 28 function

// let img = document.querySelector('img');

const classChange = (element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('big-img')) {
            element.classList.remove('big-img');
        } else {
            element.classList.add('big-img');
        }
    });
};

module.exports = classChange;