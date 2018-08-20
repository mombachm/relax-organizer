import { AbstractCommand } from "./Command";

export class HistoryCommand extends AbstractCommand {

  constructor(commandArguments: string[]) {
    super(commandArguments);
  }

  public execute() {
    console.log("History Command.");
    
  }
}