// function changeBackground(color,textColor) {
//   document.body.style.backgroundColor = color;
//   document.body.style.color = textColor;
// }
// const text = document.getElementById("text");
// const themebtn = document.getElementById("theme-button");
// themebtn.addEventListener("click", ()=> {
//     const currentcolor = document.body.style.backgroundColor;
//     if(!currentcolor || currentcolor=='white'){
//         changeBackground('black','white');
//         themebtn.innerHTML='light mode';
//     }
//     else {
//         changeBackground('white','black');
//         themebtn.innerHTML='dark mode';
//     }
// });

function changeBackground(color, textColor) {
  document.body.style.backgroundColor = color;
  document.body.style.color = textColor;
}
const themebtn = document.getElementById("theme-button");
themebtn.addEventListener("click", () => {
  const currentcolor = document.body.style.backgroundColor;
  if (!currentcolor || currentcolor == "white") {
    changeBackground("black", "white");
    themebtn.innerhtml = "light mode";
  } else {
    changeBackground("white", "black");
    themebtn.innerHTML = "dark mode";
  }
});
