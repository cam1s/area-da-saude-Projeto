const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        if (i === slideIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlides(slideIndex);
});

nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlides(slideIndex);
});

showSlides(slideIndex);