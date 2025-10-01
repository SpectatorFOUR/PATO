window.addEventListener('scroll', function() {
    const header = document.querySelector('.wrap-menu-header');
    if (window.scrollY > 10) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.wrap-menu-header');
    const logoImg = document.querySelector('.logo img');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
        // Change logo image
        if (logoImg && logoImg.dataset.logofixed) {
            logoImg.src = logoImg.dataset.logofixed;
        }
    } else {
        header.classList.remove('scrolled');
        // Restore original logo image
        logoImg.src = './assets/logo.png.webp';
    }
});


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




// Event section starts

document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------
    // SLIDER FUNCTIONALITY
    // ----------------------------
    const slides = document.querySelectorAll(".slick2 .item-slick2");
    const dotsContainer = document.querySelector(".wrap-slick2-dots");
    let currentIndex = 0;
    let autoSlideInterval;

    // Create dots
    const dotsList = document.createElement("ul");
    dotsList.classList.add("slick2-dots");

    slides.forEach((_, i) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.addEventListener("click", () => goToSlide(i));
        li.appendChild(btn);
        dotsList.appendChild(li);
    });

    dotsContainer.appendChild(dotsList);
    const dots = dotsList.querySelectorAll("li");

    function updateSlider() {
    slides.forEach((slide, i) => {
        const blo2 = slide.querySelector(".blo2");

        if (i === currentIndex) {
            slide.style.display = "block";

            // show the card
            if (blo2) {
                blo2.classList.remove("visible-false");
                blo2.classList.add("visible-true"); // optional class if you want to style visible state
            }
        } else {
            slide.style.display = "none";

            // hide the card again when not active
            if (blo2) {
                blo2.classList.add("visible-false");
                blo2.classList.remove("visible-true");
            }
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("slick-active", i === currentIndex);
    });
}


    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5 sec auto slide
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Add arrows
    const prevBtn = document.createElement("div");
    prevBtn.className = "arrow-slick2 prev-slick2";
    prevBtn.innerHTML = '<i class="fa fa-angle-left"></i>';
    prevBtn.addEventListener("click", prevSlide);

    const nextBtn = document.createElement("div");
    nextBtn.className = "arrow-slick2 next-slick2";
    nextBtn.innerHTML = '<i class="fa fa-angle-right"></i>';
    nextBtn.addEventListener("click", nextSlide);

    document.querySelector(".wrap-slick2").appendChild(prevBtn);
    document.querySelector(".wrap-slick2").appendChild(nextBtn);

    updateSlider();
    startAutoSlide();

  });
