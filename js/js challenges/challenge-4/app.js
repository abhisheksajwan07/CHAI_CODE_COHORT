const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.classList.add("task-text");
  taskTextSpan.innerHTML = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "Delete";

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  updateStats();
  taskInput.value = "";
});
taskList.addEventListener("change", function (e) {
  if (e.target.classList.contains("complete-checkbox")) {
    const taskItem = e.target.parentElement;
    taskItem.classList.toggle("completed");
    updateStats();
  }
});
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-button")) {
    e.target.parentElement.remove();
    updateStats();
    if (taskList.children.length === 0) {
      const emptyMessage = document.createElement("li");
      emptyMessage.classList.add("empty-list");
      emptyMessage.textContent = "No tasks yet. Add one above!";
      taskList.appendChild(emptyMessage);
    }
  }
});
function updateStats() {
  const tasks = document.querySelectorAll(".task-item");
  const completed = document.querySelectorAll(".task-item.completed");
  totalTasks.textContent = `Total tasks: ${tasks.length}`;
  completedTasks.textContent = `Completed: ${completed.length}`;
}
