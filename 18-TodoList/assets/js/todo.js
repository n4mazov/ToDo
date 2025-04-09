// Animate
function animateButtonPress(button) {
  anime({
    targets: button,
    scale: [
      { value: 0.95, duration: 100 },
      { value: 1, duration: 200 },
    ],
    easing: "easeInOutQuad",
  });
}

// Add task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    animateButtonPress(this);
    editTask(span);
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function () {
    animateButtonPress(this);
    removeTask(li);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  // Animate task entry
  anime({
    targets: li,
    opacity: [0, 1],
    translateY: [-20, 0],
    scale: [0.95, 1],
    duration: 500,
    easing: "easeOutExpo",
  });

  taskInput.value = "";
}

// Remove task
function removeTask(li) {
  anime({
    targets: li,
    opacity: [1, 0],
    scale: [1, 0.9],
    duration: 300,
    easing: "easeInOutQuad",
    complete: () => li.remove(),
  });
}

// Edit task
function editTask(span) {
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}

// Animate "Add"
document.getElementById("addButton").addEventListener("click", function () {
  animateButtonPress(this);
  addTask();
});
