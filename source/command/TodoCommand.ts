import { AbstractCommand } from "./Command";

export class TodoCommand extends AbstractCommand {

  constructor(commandArguments: string[]) {
    super(commandArguments);
  }

  public execute() {
    console.log("ToDo Command.");
  }
}