import "./style.css";
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateIndexes();
  saveTasks();
};

const updateIndexes = () => {
  tasks.forEach((task, idx) => {
    task.index = idx + 1;
  });
};

const editTask = (index, newDescription) => {
  if (index >= 0 && index < tasks.length) {
    tasks[index].description = newDescription;
    saveTasks();
  }
};

const displayTasks = () => {
  const listContainer = document.getElementById("ls-contaner");
  listContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "task-checkbox";
    checkbox.addEventListener("change", () => toggleComplete(index));

    const description = document.createElement("span");
    description.textContent = task.description;
    description.className = "task-description";
    description.addEventListener("dblclick", () => {
      editTaskDescription(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "task-delete-button";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
      displayTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(description);
    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);
  });
};

const toggleComplete = (index) => {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
  }
};

const editTaskDescription = (index) => {
  const listItem = document.querySelectorAll("li")[index];
  const description = listItem.querySelector("span");

  const input = document.createElement("input");
  input.type = "text";
  input.className = "my-input";
  input.value = description.textContent;
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const newDescription = input.value.trim();
      if (newDescription) {
        editTask(index, newDescription);
        displayTasks();
      }
    }
  });
  input.addEventListener("blur", () => {
    const newDescription = input.value.trim();
    if (newDescription) {
      editTask(index, newDescription);
      displayTasks();
    }
  });

  listItem.replaceChild(input, description);
  input.focus();
};

const clearCompleted = () => {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].completed) {
      deleteTask(i);
    }
  }
  displayTasks();
};

document.getElementById("my-btn").addEventListener("click", () => {
  const inputBox = document.getElementById("input-box");
  const description = inputBox.value.trim();
  if (description) {
    addTask(description);
    inputBox.value = "";
    displayTasks();
  }
});

document.querySelector(".Remove-btn").addEventListener("click", clearCompleted);

displayTasks();
