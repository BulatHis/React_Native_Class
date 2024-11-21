import { makeAutoObservable } from 'mobx';

class TaskStore {
  tasks = [];
  task = ''; // Текущий ввод новой задачи

  constructor() {
    makeAutoObservable(this);
  }

  setTask(task) {
    this.task = task;
  }

  addTask() {
    if (this.task.trim()) {
      this.tasks.push({
        id: Date.now().toString(),
        text: this.task,
        completed: false,
      });
      this.task = ''; // Очистка ввода
    }
  }

  toggleTask(id) {
    const task = this.tasks.find((item) => item.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
}

export default new TaskStore();