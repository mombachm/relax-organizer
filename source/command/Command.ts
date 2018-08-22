export interface Command {
  execute(): void;
  setArguments(commandArguments: string[]): void;
}

export enum CommandType {
  ToDo,
  History,
  ListTasks,
  ListHistory,
  DeleteEvents,
  DeleteTasks
}

export abstract class AbstractCommand implements Command {
  protected arguments: string[];

  constructor(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  public setArguments(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  protected hasArguments(): boolean {
    return Boolean(this.arguments.length)
  }

  public execute(): void {
    console.log("Default command.");
  }
}