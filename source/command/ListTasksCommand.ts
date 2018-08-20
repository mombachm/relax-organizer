import { AbstractCommand } from "./Command";
import { Task } from "../logitem/todo/Task";
import { TaskService } from "../io/services/TaskService";
import InfoMessage from "../utils/messages/InfoMessage";
import Message from "../utils/messages/MessageConstants";
import { MessageColor } from "../utils/messages/Message";

export class ListTasksCommand extends AbstractCommand {
  private taskService: TaskService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.taskService = new TaskService();
  }

  public execute(): void {
    const tasks: Task[] = this.loadTasks();
    if(tasks.length) {
      this.listTasksByDate(tasks);
    } else {
      throw new InfoMessage(Message.Info.TaskListCommand.NoTasks);
    }
  }

  private loadTasks(): Task[] {
    const tasks: Task[] = this.taskService.listTasks();
    return tasks;
  }

  private listTasksByDate(tasks: Task[]) {
    let date: Date;
    console.log(MessageColor.FgBlue + "\n\n\n");
    tasks.forEach(task => {
      if(date && task.getCreationDate().toDateString() !== date.toDateString()) {
        date = task.getCreationDate();
        console.log(task.getCreationDate().toLocaleDateString());
      } else if (!date) {
        date = task.getCreationDate();
        console.log(task.getCreationDate().toLocaleDateString());
      }
      console.log(MessageColor.FgBlack + "------- " + task.getId().toString() + " -------" + MessageColor.Reset);
      console.log(MessageColor.FgCyan + task.toString() + MessageColor.Reset);
    });
    console.log(MessageColor.FgBlue + "\n\n\n");
  }
}