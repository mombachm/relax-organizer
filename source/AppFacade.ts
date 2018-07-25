import CommandIntepreter from "./interpreter/CommandInterpreter";
import { CommandType, Command } from "./command/Command";
import { CommandBuilder } from "./command/CommandBuilder";

export default class AppFacade {
  private commandInterpreter: CommandIntepreter;

  constructor() {
    this.commandInterpreter = CommandIntepreter.getInstance();
  }
  
  public executeCommand(processArguments: string[]) {
    const commandType: CommandType = this.commandInterpreter.getCommandType(processArguments);
    const commandBuilder = new CommandBuilder();
    commandBuilder.setCommandType(commandType);
    commandBuilder.setArguments(processArguments);
    const command: Command | null = commandBuilder.buildCommand();
    if (command) {
      command.execute();
    }
  }
}