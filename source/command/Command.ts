export interface Command {
  execute(): void;
  setArguments(commandArguments: string[]): void;
}

export enum CommandType {
  ToDo = 0,
  History = 1
}

export abstract class AbstractCommand implements Command {
  protected arguments: string[];

  constructor(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  public setArguments(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  public execute(): void {
    console.log("Default command.");
  }
}