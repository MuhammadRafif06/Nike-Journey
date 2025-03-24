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

function doPost(e) {
    var sheet = SpreadsheetApp.openById("1gALD9t4nFw7KT4yAJCrN0gSI9lcFsd9HCMAD-M1nmQY").getSheetByName("FormResponses");
  
    // cek apakah request mengandung data
    if (!e || !e.parameter.name || !e.parameter.email || !e.parameter.suggestion) {
      return ContentService.createTextOutput("No data received").setMimeType(ContentService.MimeType.TEXT);
    }
  
    // tambahkan data ke spreadsheet
    sheet.appendRow([new Date(), e.parameter.name, e.parameter.email, e.parameter.suggestion]);
  
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  
  
  document.getElementById("suggestionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbyIRvIMr5Yb3MXcRwio00UOZ5yNKknM6GwJqPPuhAxkZuCUFYNroDbflEMTXUWXQHmd/exec", {
        method: "POST",
        body: formData
    }).then(response => {
        alert("Thanks for your suggestion!");
        document.getElementById("suggestionForm").reset();
    }).catch(error => console.error("Error:", error));
});


  







