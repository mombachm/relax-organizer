import { Task } from "../../logitem/todo/Task";
import { JSONFileIOStream } from "../JSONFileIOStream";
import { MainDAO } from "../MainDAO";
import ErrorMessage from "../../utils/messages/ErrorMessage";
import Message from "../../utils/messages/MessageConstants";

export interface TaskService {
  listTasks(): Task[];
  createTask(task: Task): void;
  updateTask(id: number, task: Task): void;
  deleteTask(id: number): void;
  getTaskById(id: number): Task | undefined;
}

export class TaskService implements TaskService {

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
    return model.tasks;
  }

  public getTaskById(id: number): Task | undefined {
    const tasks = this.listTasks();
    const targetTask = tasks.find((task) => task.getId() === id);
    return targetTask;
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

}