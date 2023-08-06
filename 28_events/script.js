// version 1

let imgs = document.querySelector('.gallery-img');

imgs.addEventListener('click', (event) => {
    let img = event.target;
    if (img.classList.contains('big-img')) {
        img.classList.remove('big-img');   
    } else {
        img.classList.add('big-img');
    }
});

// version 2

// let imgs2 = document.querySelector('.gallery-img');

// imgs2.addEventListener('click', (event) => {
//     event.target.classList.toggle('big-img');
// });

// version 3

// let imgs3 = document.querySelectorAll('img');

// imgs3.forEach((img) => {
//     img.addEventListener('click', function () {
//         if (img.classList.contains('big-img')) {
//             img.classList.remove('big-img');   
//         } else {
//             img.classList.add('big-img');
//         }
//     });  
// });