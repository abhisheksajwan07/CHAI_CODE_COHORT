function startColorApp() {
  const dropDown = document.querySelector("#colorSelect");
  const makeButton = document.querySelector("#createBtn");
  const buttonArea = document.querySelector("#buttonContainer");

  let usedColors = [];
  function makeColorButton(color) {
    const button = document.createElement("button");

    button.style.backgroundColor = color;
    button.innerText = color;
    button.className = "color-button";
    button.addEventListener("click", function () {
      document.body.style.backgroundColor = color;
      button.textContent = `${color} ✓`;
      setTimeout(function () {
        button.textContent = color;
      }, 1000);
    });
    return button;
  }
  makeButton.addEventListener("click", function () {
    const pickedColor = dropDown.value;
    if (!pickedColor) {
      alert("Please select a color first!");
      return;
    }
    if (usedColors.includes(pickedColor)) {
      alert("you already created a button with this color!");
      dropDown.value = "";
      return;
    }
    const newButton = makeColorButton(pickedColor);
    buttonArea.appendChild(newButton);
    usedColors.push(pickedColor);
    dropDown.value = "";
  });
  const customOption = document.createElement("option");
  customOption.value = "custom";
  customOption.textContent = "Custom color...";
  dropDown.appendChild(customOption);
  dropDown.addEventListener("change",function(){
    if(dropDown.value === "custom"){
        const customColor = prompt("Enter a color name or hex code(e.g.,#FF5733):");
        if(customColor){
            const tempOption = document.createElement("option");
            tempOption.value = customColor;
            tempOption.textContent = customColor;
            tempOption.selected = true;
            dropDown.appendChild(tempOption);
        }else{
            dropDown.value="";
        }
    }
  })

}
document.addEventListener("DOMContentLoaded", startColorApp);