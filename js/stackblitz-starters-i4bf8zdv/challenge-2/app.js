/**
 * Write your challenge solution here
 */
const mainHeading = document.getElementById("mainHeading");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const purpleButton = document.getElementById("purpleButton");
const resetButton = document.getElementById("resetButton");

redButton.addEventListener('click',()=>{
    mainHeading.style.color = '#e74c3c';
})
greenButton.addEventListener('click',()=>{
    mainHeading.style.color = '#2ecc71';
})

blueButton.addEventListener('click',()=>{
    mainHeading.style.color = "#3498db";
})

purpleButton.addEventListener('click',()=>{
    mainHeading.style.color = "#9b59b6";
})

resetButton.addEventListener('click',()=>{
    mainHeading.style.color = "#34495e"
})


