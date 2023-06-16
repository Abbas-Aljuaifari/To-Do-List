import Task from "./task.js";

class TaskList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  addTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
    this.updateIndexes();
    this.saveTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.updateIndexes();
    this.saveTasks();
  }

  updateIndexes() {
    this.tasks.forEach((task, idx) => {
      task.index = idx + 1;
    });
  }

  toggleComplete(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveTasks();
    }
  }

  editTaskDescription(index, newDescription) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].description = newDescription;
      this.saveTasks();
    }
  }

  clearCompleted() {
    for (let i = this.tasks.length - 1; i >= 0; i -= 1) {
      if (this.tasks[i].completed) {
        this.deleteTask(i);
      }
    }
  }
}

export default TaskList;
