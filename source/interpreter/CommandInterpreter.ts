import { CommandType } from "../command/Command";
import ErrorMessage from "../utils/messages/ErrorMessage";
import ErrorMessageText from "../utils/messages/MessageConstants";

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
      case "td":
        return CommandType.ToDo;
      case "h":
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