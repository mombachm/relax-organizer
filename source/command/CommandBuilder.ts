import { CommandType, Command } from "./Command";
import { TodoCommand } from "./TodoCommand";
import { HistoryCommand } from "./HistoryCommand";

export class CommandBuilder {
  private commandType: CommandType;
  private commandArguments: string[];

  constructor() {

  }

  public setCommandType(commandType: CommandType) {
    this.commandType = commandType;
  }

  public setArguments(commandArguments: string[]) {
    this.commandArguments = commandArguments;
    this.commandArguments.shift();
  }

  public buildCommand(): Command | null {
    switch(this.commandType) {
      case CommandType.ToDo:
        return new TodoCommand(this.commandArguments);
      case CommandType.History:
        return new HistoryCommand(this.commandArguments);
      default:
        return null;
    }
  }
}