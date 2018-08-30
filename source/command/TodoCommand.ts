import { AbstractCommand } from "./Command";
import { Task } from "../logitem/todo/Task";
import { TaskService } from "../io/services/TaskService";
import { ListTasksCommand } from "./ListTasksCommand";

export class TodoCommand extends AbstractCommand {
  private taskService: TaskService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.taskService = new TaskService();
    this.setNextCommand(new ListTasksCommand(commandArguments));
  }

  public execute(): void {
    if(!this.hasArguments()) {
      return;
    }
    const tasks = this.createTasksForArguments();
    this.saveTasks(tasks);
    super.execute();
  }

  private createTasksForArguments(): Task[] {
    const tasks: Task[] = [];
    this.arguments.forEach(taskDescription => {
      const task = new Task(taskDescription);
      tasks.push(task);
    });
    return tasks;
  }

  private saveTasks(tasks: Task[]) {
    tasks.forEach(task => {
      this.taskService.createTask(task);
    });
  }
}