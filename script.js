const inputbox = document.getElementById("input-box");
const lscontaner = document.getElementById("ls-contaner");

const tasks = [
  {
    description: "Task 1",
    completed: true,
    index: 1,
  },
  {
    description: "Task 2",
    completed: true,
    index: 2,
  },
  {
    description: "Task 3",
    completed: true,
    index: 3,
  },
];

function renderTasks() {
  const lscontaner = document.getElementById("ls-contaner");
  lscontaner.innerHTML = "";

  tasks.sort((a, b) => a.index - b.index); // Sort tasks by index

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = task.description;
    if (task.completed) {
      li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    lscontaner.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderTasks);
