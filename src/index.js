import "./style.css";
import TaskList from "./modules/taskList.js";

const taskList = new TaskList();

const displayTasks = () => {
  const listContainer = document.getElementById("ls-contaner");
  listContainer.innerHTML = "";

  taskList.tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "task-checkbox";
    checkbox.addEventListener("change", () => taskList.toggleComplete(index));

    const description = document.createElement("span");
    description.textContent = task.description;
    description.className = "task-description";
    description.addEventListener("dblclick", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "edit-input";
      input.value = description.textContent;
      input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          const newDescription = input.value.trim();
          if (newDescription) {
            taskList.editTaskDescription(index, newDescription);
            displayTasks();
          }
        }
      });
      input.addEventListener("blur", () => {
        const newDescription = input.value.trim();
        if (newDescription) {
          taskList.editTaskDescription(index, newDescription);
          displayTasks();
        }
      });

      listItem.replaceChild(input, description);
      input.focus();
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "task-delete-button";
    deleteButton.addEventListener("click", () => {
      taskList.deleteTask(index);
      displayTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(description);
    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);
  });
};

document.getElementById("my-btn").addEventListener("click", () => {
  const inputBox = document.getElementById("input-box");
  const description = inputBox.value.trim();
  if (description) {
    taskList.addTask(description);
    inputBox.value = "";
    displayTasks();
  }
});

document.querySelector(".Remove-btn").addEventListener("click", () => {
  taskList.clearCompleted();
  displayTasks();
});

const icon = document.querySelector(".icon");

icon.addEventListener("mouseover", () => {
  icon.title = "Click to reload the page";
});

icon.addEventListener("click", () => {
  localStorage.removeItem("tasks");
  window.location.reload();
});

displayTasks();
