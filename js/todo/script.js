const addbtn = document.getElementById("add-btn");
const todoinput = document.getElementById("todo-input");
const todocontainer = document.getElementById("todo-container");
const themebtn = document.getElementById("theme-button");
const deleteAllBtn = document.getElementById("delete-all-btn");

// Add Task
addbtn.addEventListener("click", function () {
  const taskText = todoinput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    saveTasks();
  }
  todoinput.value = "";
});

// Function to Add Task
function addTask(text, completed = false) {
  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span>`; // Wrapped text in a span for easy editing
  if (completed) li.classList.add("completed");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️"; // Pencil emoji for edit
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents triggering complete toggle
    editTask(li);
  });

  // Delete Button
  const delbtn = document.createElement("button");
  delbtn.innerHTML = "❌";
  delbtn.classList.add("delete-btn");
  delbtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(editBtn);
  li.appendChild(delbtn);
  todocontainer.appendChild(li);
}

// Edit Task
function editTask(li) {
  const span = li.querySelector("span");
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
    saveTasks();
  }
}

// Save Tasks to Local Storage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#todo-container li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").textContent.trim(),
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks from Local Storage
function loadTasks() {
  todocontainer.innerHTML = ""; // Clears container before loading tasks
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    JSON.parse(storedTasks).forEach((task) => addTask(task.text, task.completed));
  }
}

// Delete All Tasks
deleteAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all tasks?")) {
    todocontainer.innerHTML = ""; // Clears UI
    localStorage.removeItem("tasks"); // Clears storage
  }
});

// Theme Toggle
function loadTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themebtn.innerHTML = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    themebtn.innerHTML = "🌙 Dark Mode";
  }
}

themebtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  themebtn.innerHTML = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Load tasks and theme on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  loadTheme();
});
