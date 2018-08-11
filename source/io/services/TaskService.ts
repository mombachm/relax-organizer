import { Task } from "../../logitem/todo/Task";

export interface TaskService {
  listTasks(): Task[];
  createTask(task: Task): void;
  updateTask(event: Task): void;
  deleteTask(id: number): void;
  getTaskById(id: number): void;
}