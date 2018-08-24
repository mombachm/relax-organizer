import { AbstractCommand } from "./Command";
import { Task, TaskStatus } from "../logitem/todo/Task";
import { TaskService } from "../io/services/TaskService";

export class CompleteTaskCommand extends AbstractCommand {
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
    this.completeTasks(tasksIds);
  }

  public completeTasks(ids: number[]) {
    const tasks: Task[] = this.taskService.getTasksFromIds(ids);
    tasks.forEach(task => {
      task.setStatus(TaskStatus.Completed);
      this.taskService.updateTask(task.getId(), task);
    });
  }
}