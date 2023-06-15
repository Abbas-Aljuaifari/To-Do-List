// Retrieve tasks from local storage or initialize an empty array
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to save tasks in local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to add a new task
function addTask(description) {
  const newTask = {
    description: description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  tasks.forEach((task, idx) => {
    task.index = idx + 1;
  });
  saveTasks();
}

// Function to edit a task description
function editTask(index, newDescription) {
  tasks[index].description = newDescription;
  saveTasks();
}

// Function to display tasks in the HTML
function displayTasks() {
  const listContainer = document.getElementById("ls-contaner");
  listContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" ${
        task.completed ? "checked" : ""
      } onchange="toggleComplete(${index})">
      <span>${task.description}</span>
      <button onclick="editTaskPrompt(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    listContainer.appendChild(listItem);
  });
}

// Function to toggle the completion status of a task
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
}

// Function to prompt the user to edit a task
function editTaskPrompt(index) {
  const newDescription = prompt("Enter the new task description:");
  if (newDescription) {
    editTask(index, newDescription);
    displayTasks();
  }
}

// Function to clear all completed tasks
function clearCompleted() {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].completed) {
      deleteTask(i);
    }
  }
  displayTasks();
}

// Event listener for the Add button
document.getElementById("my-btn").addEventListener("click", function () {
  const inputBox = document.getElementById("input-box");
  const description = inputBox.value.trim();
  if (description) {
    addTask(description);
    inputBox.value = "";
    displayTasks();
  }
});

// Event listener for the Clear all completed button
document.querySelector(".Remove-btn").addEventListener("click", clearCompleted);

// Display the tasks when the page loads
displayTasks();
