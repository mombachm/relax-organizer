import { Task } from "../../logitem/todo/Task";
import { JSONFileIOStream } from "../JSONFileIOStream";

export interface TaskService {
  listTasks(): Task[];
  createTask(task: Task): void;
  updateTask(event: Task): void;
  deleteTask(id: number): void;
  getTaskById(id: number): void;
}

export class TaskService implements TaskService {
  public createTask(task: Task) {
    
    const stream = JSONFileIOStream.getInstance();
    // console.stream.readJSON();
  }
}