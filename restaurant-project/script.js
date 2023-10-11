const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = 'block';
}

// Initially, show the first slide
changeSlide(0);

// Add event listeners for next and previous buttons
const nextButton = document.querySelector("#nextSlide");
const prevButton = document.querySelector("#prevSlide");

if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => changeSlide(1));
    prevButton.addEventListener("click", () => changeSlide(-1));
}
