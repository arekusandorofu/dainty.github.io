const filterMobileBtn = document.getElementById('filter-mobile-btn');
const filterMobileBlock = document.getElementById('filter-mobile-block');
const filterCross = document.getElementById('filter-cross');

filterMobileBtn.addEventListener('click', () => {
    filterMobileBlock.classList.toggle('hidden');
})

filterCross.addEventListener('click', () => {
    filterMobileBlock.classList.toggle('hidden');
})

const buttons = document.querySelectorAll('.filter-btn');
const movies = document.querySelectorAll('.shop-card');
const pagination = document.querySelector('.pagination')
const filterReset = document.querySelector('.filter-reset')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const genre = button.dataset.furniture;
        console.log(genre)
        movies.forEach((movie) => {
            const movieGenre = movie.dataset.furniture;
            if (genre === 'all' || genre === movieGenre) {
                movie.style.display = '';

            }
            else {
                movie.style.display = 'none';
            }
        });
    });
});

const filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        filterMobileBlock.classList.toggle('hidden');
    })
})