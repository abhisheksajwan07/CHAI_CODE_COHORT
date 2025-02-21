/**
 * Write your challenge solution here
 */
function changeBackground(color, text) {
  document.body.style.backgroundColor = color;
  document.body.style.color = text;
}
const togglebtn = document.getElementById("toggleButton");
const statusText = document.getElementById("status");
const bulb = document.getElementById("bulb");

togglebtn.addEventListener("click", () => {
  const isOff = bulb.classList.contains("off");
  if (isOff) {
    changeBackground("black", "white");
    bulb.classList.remove("off");
    togglebtn.innerHTML = "Turn Off";
    statusText.innerHTML = "Status:On";
  } else {
    changeBackground("white", "black");
    bulb.classList.add("off");
    togglebtn.innerHTML = "Turn On";
    statusText.innerHTML = "Status:Off";
  }
});
