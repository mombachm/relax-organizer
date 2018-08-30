import ErrorMessage from "../utils/messages/ErrorMessage";
import Message from "../utils/messages/MessageConstants";

export enum CommandType {
  ToDo,
  History,
  ListTasks,
  ListHistory,
  DeleteEvents,
  DeleteTasks,
  CompleteTask
}

export type CommandMap = {[key in string]: CommandType}

export const CommandCode: CommandMap = {
  ["td"]: CommandType.ToDo,
  ["h"]:  CommandType.History,
  ["lt"]: CommandType.ListTasks,
  ["lh"]: CommandType.ListHistory,
  ["de"]: CommandType.DeleteEvents,
  ["dt"]: CommandType.DeleteTasks,
  ["ct"]: CommandType.CompleteTask
}

export interface Command {
  execute(): void;
  setArguments(commandArguments: string[]): void;
}

export abstract class AbstractCommand implements Command {
  protected arguments: string[];
  private nextCommand: AbstractCommand;

  constructor(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  public setArguments(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  protected hasArguments(): boolean {
    return Boolean(this.arguments.length)
  }

  protected setNextCommand(command: AbstractCommand) {
    this.nextCommand = command;
  }

  private hasNextCommand(): boolean {
    return Boolean(this.nextCommand);
  }

  protected getLogItemsIdsFromArguments(): number[] {
    const logItemsIds: number[] = [];
    try {
      this.arguments.forEach(logItemId => {
        logItemsIds.push(Number(logItemId));
      });
    } catch (e) {
      throw new ErrorMessage(Message.Commands.DeleteLogItemCommand.Error.InvalidIds);
    }
    return logItemsIds;
  }

  public execute(): void {
    if(this.hasNextCommand()) {
      this.nextCommand.execute();
    }
  }
}