//Slider Homepage
let currentIndex = 0;
function moveSlide(step) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// auto slide setiap 3 detik
setInterval(() => moveSlide(1), 3000);

document.getElementById("logo-nike").addEventListener("click", function() {
    location.reload(); // refresh halaman
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".testimonial-wrapper");
    const slideItems = document.querySelectorAll(".testimonial-slide");
    const prevButton = document.querySelector(".testimonial-prev"); // ubah ke testimonial-prev
    const nextButton = document.querySelector(".testimonial-next"); // ubah ke testimonial-next
    const totalSlides = slideItems.length;
    const slidesPerView = 3; // jumlah gambar yang tampil sekaligus

    function updateSlide() {
        slides.style.transform = `translateX(-${(currentIndex * 100) / slidesPerView}%)`;
    }

    function moveSlide(step) {
        const newIndex = currentIndex + step;

        if (newIndex < 0 || newIndex > totalSlides - slidesPerView) return;

        currentIndex = newIndex;
        updateSlide();
    }

    prevButton.addEventListener("click", function () {
        moveSlide(-1);
    });

    nextButton.addEventListener("click", function () {
        moveSlide(1);
    });
});





