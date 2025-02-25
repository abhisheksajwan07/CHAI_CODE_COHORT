const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let currentIndex = 0;
let autoPlayInterval = null;
let countdown = 3;
let countdownInterval = null;

// Load images dynamically and create indicators
images.forEach((image, index) => {
  const slide = document.createElement("div");
  slide.classList.add("carousel-slide");
  slide.style.backgroundImage = `url(${image.url})`;
  carouselTrack.appendChild(slide);

  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  indicator.dataset.index = index;
  indicator.addEventListener("click", () => moveToSlide(index));
  carouselNav.appendChild(indicator);
});

const updateCarousel = () => {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  caption.textContent = images[currentIndex].caption;
  document.querySelectorAll(".carousel-indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
};

const moveToSlide = (index) => {
  currentIndex = (index + images.length) % images.length;
  updateCarousel();
};

const updateTimerDisplay = () => {
  if (timerDisplay) {
    timerDisplay.textContent = `Next slide in: ${countdown}s`;
  }
};

const startCountdown = () => {
  clearInterval(countdownInterval);
  countdown = 3;
  updateTimerDisplay();

  countdownInterval = setInterval(() => {
    countdown--;
    updateTimerDisplay();

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      moveToNextSlide();
    }
  }, 1000);
};

const moveToNextSlide = () => {
  moveToSlide(currentIndex + 1);
  if (autoPlayInterval) {
    startCountdown();
  }
};

prevButton.addEventListener("click", () => {
  moveToSlide(currentIndex - 1);
  if (autoPlayInterval) startCountdown();
});

nextButton.addEventListener("click", () => {
  moveToSlide(currentIndex + 1);
  if (autoPlayInterval) startCountdown();
});

const startAutoPlay = () => {
  if (!autoPlayInterval) {
    startCountdown();
    autoPlayInterval = setInterval(moveToNextSlide, 3000);
    autoPlayButton.textContent = "Stop Auto Play";
  }
};

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
  clearInterval(countdownInterval);
  if(timerDisplay) timerDisplay.textContent = "";
  autoPlayButton.textContent = "Start Auto Play";
};

autoPlayButton.addEventListener("click", () => {
  if (autoPlayInterval) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
});

updateCarousel();