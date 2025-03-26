//Slider Homepage
let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// jalankan slider otomatis setiap 3 detik
setInterval(() => {
  moveSlide(1); // geser ke slide berikutnya
}, 3000);

function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("active");
}

// tutup menu jika klik di luar
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav-links");
  const button = document.querySelector(".hamburger");

  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

//refresh logo nike pada bagian navbar
document.getElementById("logo-nike").addEventListener("click", function () {
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
    const slideWidth = slides[0].clientWidth; // Ambil ulang width untuk jaga-jaga jika berubah
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
  window.addEventListener("resize", updateSliderPosition);
});

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    document.getElementById("message").textContent = "Submitting..";
    document.getElementById("message").style.display = "block";
    document.getElementById("submit-button").disabled = true;

    // Collect the form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("Suggestions").addEventListener("submit", function (e) {
            e.preventDefault(); // biar ga reload halaman
        
            // ambil data dari form
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                suggestion: document.getElementById("suggestion").value,
            };
    
            // kirim ke google apps script
            fetch("https://script.google.com/macros/s/AKfycbz6zFcEGjF0INx8KCshmYYaZWkWDUBqSeioenrfOScxB0O0eDvVxuHYeo-jCPvT4KNa2w/exec", { // ganti dengan url yang lu copy dari google apps script
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    alert("Data submitted successfully!"); // kasih alert berhasil
                    document.getElementById("Suggestions").reset(); // reset form
                } else {
                    throw new Error(data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred while submitting the form."); // kasih alert error
            });
        });
    });    
});