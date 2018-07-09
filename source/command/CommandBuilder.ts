import { CommandType } from "./Command";

export class CommandBuilder {
  private commandType: CommandType;
  private commandArguments: string [];

  constructor() {

  }

  public setCommandType(commandType: CommandType) {
    this.commandType = commandType;
  }

  public setArguments(commandArguments: string[]) {
    this.commandArguments = commandArguments;
    this.commandArguments.splice(0, 1);
  }

  public buildCommand() {
    console.log(this.commandArguments);
  }
}