const slides = document.querySelectorAll('#banner .start');
let currentSlide = 0;

function showSlide() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}

showSlide();

setInterval(showSlide, 8000);