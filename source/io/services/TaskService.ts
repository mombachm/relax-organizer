import { Task } from "../../logitem/todo/Task";
import { JSONFileIOStream } from "../JSONFileIOStream";
import { MainDAO } from "../MainDAO";
import ErrorMessage from "../../utils/messages/ErrorMessage";
import ErrorMessageText from "../../utils/messages/MessageConstants";

export interface TaskService {
  listTasks(): Task[];
  createTask(task: Task): void;
  updateTask(event: Task): void;
  deleteTask(id: number): void;
  getTaskById(id: number): void;
}

export class TaskService implements TaskService {

  public createTask(task: Task) {
    if(!task) {
      throw new ErrorMessage(ErrorMessageText.Task.FailedToCreate);
    }
    const model = MainDAO.getModel();
    model.tasks.push(task);
    MainDAO.saveModel(model);
  }
}