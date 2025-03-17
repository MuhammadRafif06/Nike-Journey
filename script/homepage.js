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

