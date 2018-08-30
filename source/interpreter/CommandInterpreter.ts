import { CommandType, CommandCode } from "../command/Command";
import ErrorMessage from "../utils/messages/ErrorMessage";
import Message from "../utils/messages/MessageConstants";
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
      throw new ErrorMessage(Message.Error.Interpreter.InvalidCommand);
    }
    const command = processArguments[0];
    const commandType = CommandCode[command];
    if(commandType !== undefined) {
      return commandType;
    }
    throw new ErrorMessage(Message.Error.Interpreter.InvalidCommand);
  }

  private hasNoArguments(processArguments: string[]): boolean {
    if (processArguments.length) {
      return false;
    }
    return true;
  }
}