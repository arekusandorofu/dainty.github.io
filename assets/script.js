
// const filterMobileBtn = document.getElementById('filter-mobile-btn');
// const filterMobileBlock = document.getElementById('filter-mobile-block');

// filterMobileBtn.addEventListener('click', () => {
//     filterMobileBlock.classList.toggle('hidden');
// })


// const buttons = document.querySelectorAll('.filter-btn');
// const movies = document.querySelectorAll('.shop-card');
// const pagination = document.querySelector('.pagination')
// const filterReset = document.querySelector('.filter-reset')

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const genre = button.dataset.furniture;
//         console.log(genre)
//         movies.forEach((movie) => {
//             const movieGenre = movie.dataset.furniture;
//             if (genre === 'all' || genre === movieGenre) {
//                 movie.style.display = '';

//             }
//             else {
//                 movie.style.display = 'none';
//             }
//         });
//     });
// });


// const burger = document.getElementById('burger');
// const menu = document.getElementById('menu');
// const menuBg = document.getElementById('menu-bg');

// const cross = document.getElementById('cross');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('hidden')
//     menuBg.classList.toggle('hidden')
// })

// cross.addEventListener('click', () => {
//     menu.classList.toggle('hidden')
//     menuBg.classList.toggle('hidden')
// })



// const slides = document.querySelectorAll('#banner .start');
// let currentSlide = 0;

// function showSlide() {

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }

//     slides[currentSlide].style.display = 'block';

//     currentSlide++;

//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }
// }

// showSlide();

// setInterval(showSlide, 8000);