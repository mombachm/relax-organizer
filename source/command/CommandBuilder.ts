import { CommandType, Command } from "./Command";
import { TodoCommand } from "./TodoCommand";
import { HistoryCommand } from "./HistoryCommand";
import { ListTasksCommand } from "./ListTasksCommand";
import { ListHistoryCommand } from "./ListHistoryCommand";
import { DeleteTaskCommand } from "./DeleteTaskCommand";

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
      case CommandType.ListTasks:
        return new ListTasksCommand(this.commandArguments);
      case CommandType.ListHistory:
        return new ListHistoryCommand(this.commandArguments);
      case CommandType.DeleteTasks:
        return new DeleteTaskCommand(this.commandArguments);
      default:
        return null;
    }
  }
}