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
    const taskIds: number[] = this.getIdsFromArguments();
    this.taskService.deleteTasks(taskIds);
  }

  private hasArguments(): boolean {
    return Boolean(this.arguments.length)
  }

  private getIdsFromArguments(): number[] {
    const taskIds: number[] = [];
    try {
      this.arguments.forEach(taskId => {
        taskIds.push(Number(taskId));
      });
    } catch (e) {
      throw new ErrorMessage(Message.Commands.DeleteTaskCommand.Error.InvalidIds);
    }
    return taskIds;
  }
}