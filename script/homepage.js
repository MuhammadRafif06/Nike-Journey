//Slider Homepage
let currentIndex = 0;
function moveSlide(step) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//refresh logo nike pada bagian navbar
document.getElementById("logo-nike").addEventListener("click", function() {
    location.reload(); // refresh halaman
});

//Slider untuk Testimonial
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-wrapper");
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth; // ambil lebar satu slide

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // balik ke awal kalau sudah slide terakhir
        }
        updateSliderPosition();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // balik ke slide terakhir kalau di awal
        }
        updateSliderPosition();
    });
});






