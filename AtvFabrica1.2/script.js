document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const leftArrow = document.querySelector(".slider-arrow.left");
    const rightArrow = document.querySelector(".slider-arrow.right");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlider();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });
    
    updateSlider();
});
