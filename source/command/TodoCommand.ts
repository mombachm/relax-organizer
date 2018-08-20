import { AbstractCommand } from "./Command";
import { Task } from "../logitem/todo/Task";

export class TodoCommand extends AbstractCommand {

  constructor(commandArguments: string[]) {
    super(commandArguments);
  }

  public execute(): void {
    console.log("ToDo Command.");
    if(!this.hasArguments()) {
      return;
    }
    const task = new Task();
    console.log(this.arguments);
  }

  private hasArguments(): boolean {
    return Boolean(this.arguments.length)
  }

}