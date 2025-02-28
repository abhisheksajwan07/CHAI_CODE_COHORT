const buttons = document.querySelectorAll(".accordion-button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const item = this.parentElement; // accordion-item
    const content = item.querySelector(".accordion-content");

    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      otherItem.classList.remove("active");
      otherItem.querySelector(".accordion-content").style.maxHeight = "0px";
      otherItem
        .querySelector(".accordion-button")
        .setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      this.setAttribute("aria-expanded", "true");
    }
  });
});
