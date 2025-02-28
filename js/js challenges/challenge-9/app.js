const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const menuPanel = document.querySelector(".panel");

// Open the menu
toggleBtn.addEventListener("click", () => {
  menuPanel.classList.add("active");
});

// Close the menu
closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});
