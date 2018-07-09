export interface Command {
  execute(): void;
  setArguments(commandArguments: string[]): void;
}

export enum CommandType {
  ToDo = 0,
  History = 1
}