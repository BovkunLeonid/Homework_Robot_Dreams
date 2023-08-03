const aaa = document.getElementById('aaa');
const mainTag = document.getElementsByTagName('main');
const bigImg = document.getElementsByClassName('big-img');
const smallImg = document.getElementsByClassName('small-img');
let imgAll = document.querySelectorAll('main img');
let img = document.querySelector('main img');
let h2Tag = document.getElementsByTagName('h2');

const element = document.querySelector('.small-img');
element.addEventListener('click', function(event) {
    console.log('Hello');
});
    



img.onclick = function () {
    img.style.color = 'red';
    console.log(imgAll);
}