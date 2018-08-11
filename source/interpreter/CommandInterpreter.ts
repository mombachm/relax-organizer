import { CommandType } from "../command/Command";
import ErrorMessage from "../utils/messages/ErrorMessage";
import ErrorMessageText from "../utils/messages/MessageConstants";
import Constants from "../utils/Constants";

export default class CommandIntepreter {
  private static instance: CommandIntepreter;

  constructor() {

  }

  public static getInstance(): CommandIntepreter {
    if (this.instance) {
      return this.instance;
    }
    return new CommandIntepreter();
  }

  public getCommandType(processArguments: string[]): CommandType {
    if (this.hasNoArguments(processArguments)) {
      throw new ErrorMessage(ErrorMessageText.Interpreter.InvalidCommand);
    }
    const command = processArguments[0];
    switch(command) {
      case Constants.Commands.ToDo:
        return CommandType.ToDo;
      case Constants.Commands.History:
        return CommandType.History;
      default:
        throw new ErrorMessage(ErrorMessageText.Interpreter.InvalidCommand);
    }
  }

  private hasNoArguments(processArguments: string[]): boolean {
    if (processArguments.length) {
      return false;
    }
    return true;
  }
}