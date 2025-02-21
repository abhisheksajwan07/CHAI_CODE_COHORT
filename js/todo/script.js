const addbtn = document.getElementById("add-btn");
const todoinput = document.getElementById("todo-input");
const todocontainer = document.getElementById("todo-container");

addbtn.addEventListener("click", function () {
  const value = todoinput.value.trim();
  if (value === "") return;
  const li = document.createElement("li"); // <li> </li>
  li.innerHTML = value;
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  const delbtn = document.createElement("button");
  delbtn.innerHTML = "❌";
  delbtn.addEventListener("click", function () {
    li.remove();
  });
  
  li.appendChild(delbtn);
  todocontainer.appendChild(li);
  todoinput.value = "";
});
