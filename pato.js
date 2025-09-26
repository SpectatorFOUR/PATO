const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let autoSlideInterval = setInterval(nextSlide, 5000); // auto every 5s

function showSlide(index) {
  // update index
  currentIndex = index;

  // move slides container
  document.querySelector('.slides').style.transform =
    `translateX(-${index * 100}%)`;

  // update active classes
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

// Button events
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Dot events
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.dataset.slide));
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 10000);
}

showSlide(0);




// sidebar.js

document.addEventListener('DOMContentLoaded', function() {
    const showBtn = document.querySelector('.btn-show-sidebar');
    const hideBtn = document.querySelector('.btn-hide-sidebar');
    const sidebar = document.querySelector('.sidebar');

    if (showBtn && sidebar) {
        showBtn.addEventListener('click', function() {
            sidebar.classList.add('show-sidebar');
        });
    }

    if (hideBtn && sidebar) {
        hideBtn.addEventListener('click', function() {
            sidebar.classList.remove('show-sidebar');
        });
    }
});



