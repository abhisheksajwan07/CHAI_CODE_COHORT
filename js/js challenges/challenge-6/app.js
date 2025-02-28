function updateClock() {
  const timeElement = document.querySelector(".digital-clock");
  const dateElement = document.querySelector(".date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  // const secondDeg = (seconds / 60) * 360;
  // const minDeg = ((minutes + seconds / 60) / 60) * 360;
  // const hourDeg = (((hours % 12) + minutes / 60) / 12) * 360;
  const secondDeg = (seconds / 60) * 360;
  const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // 6 degrees per second for minute hand
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 30 degrees per hour, 0.5 degrees per minute.

  document.querySelector(
    ".second"
  ).style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.querySelector(
    ".minute"
  ).style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  document.querySelector(
    ".hour"
  ).style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}
updateClock();
setInterval(updateClock, 1000);
