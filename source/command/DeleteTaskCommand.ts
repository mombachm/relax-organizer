import { AbstractCommand } from "./Command";
import { Task } from "../logitem/todo/Task";
import { TaskService } from "../io/services/TaskService";
import ErrorMessage from "../utils/messages/ErrorMessage";
import Message from "../utils/messages/MessageConstants";

export class DeleteTaskCommand extends AbstractCommand {
  private taskService: TaskService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.taskService = new TaskService();
  }

  public execute(): void {
    if(!this.hasArguments()) {
      return;
    }
    const tasksIds: number[] = this.getLogItemsIdsFromArguments();
    this.taskService.deleteTasks(tasksIds);
  }
}