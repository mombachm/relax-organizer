import { Task } from "../../logitem/todo/Task";
import { JSONFileIOStream } from "../JSONFileIOStream";
import { MainDAO } from "../MainDAO";
import ErrorMessage from "../../utils/messages/ErrorMessage";
import Message from "../../utils/messages/MessageConstants";
import { LogItemService } from "./LogItemService";

export interface TaskService {
  listTasks(): Task[];
  createTask(task: Task): void;
  updateTask(id: number, task: Task): void;
  deleteTask(id: number): void;
  deleteTasks(ids: number[]): void;
  getTaskById(id: number): Task | undefined;
  getTasksFromIds(taskIds: number[]): Task[];
}

export class TaskService extends LogItemService implements TaskService {

  public createTask(task: Task) {
    if(!task) {
      throw new ErrorMessage(Message.Error.Task.FailedToCreate);
    }
    const model = MainDAO.getModel();
    model.tasks.push(task);
    MainDAO.saveModel(model);
  }

  public listTasks(): Task[] {
    const model = MainDAO.getModel();
    const tasks = this.filterDeletedLogItems(model.tasks);
    return tasks as Task[];
  }

  public getTaskById(id: number): Task | undefined {
    const tasks = this.listTasks();
    const targetTask = tasks.find((task) => task.getId() === id);
    return targetTask;
  }

  public getTasksFromIds(ids: number[]): Task[] {
    const tasks: Task[] = [];
    ids.forEach(id => {
      const task = this.getTaskById(id);
      if(!task) {
        throw new ErrorMessage(Message.LogItemService.Error.InvalidIds);
      }
      tasks.push(task);
    });
    return tasks;
  }

  public updateTask(id: number, task: Task) {
    const targetTask = this.getTaskById(id);
    if (targetTask) {
      Object.assign(targetTask, task);
      targetTask.setId(id);
    }
    const model = MainDAO.getModel();
    MainDAO.saveModel(model);
  }

  public deleteTask(id: number) {
    const targetTask = this.getTaskById(id);
    if (targetTask) {
      this.deleteLogItem(targetTask);
    }
  }

  public deleteTasks(ids: number[]) {
    const tasks: Task[] = this.getTasksFromIds(ids);
    tasks.forEach(task => {
      this.deleteLogItem(task);
    });
  }
}