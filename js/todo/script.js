const addbtn = document.getElementById("add-btn");
const todoinput = document.getElementById("todo-input");
const todocontainer = document.getElementById("todo-container");
const themebtn = documen.getElementById("theme-button");
addbtn.addEventListener("click", function () {
  const value = todoinput.value;
  if(value ==="") return;
  const li= document.createElement("li");
  li.innerHTML=value;
  li.addEventListener('click',()=>{
    li.classList.toggle("completed");
  })
  const delbtn = document.createElement("button");
  delbtn.innerHTML= "❌";
  delbtn.addEventListener('click',()=>{
    li.remove();
  })
  li.appendChild(delbtn);
  todocontainer.appendChild(li);
  todocontainer.value = "";
  
});
themebtn.addEventListener("click",()=>{
  document.body.classList.toggle("")
}) 