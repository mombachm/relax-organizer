import { LogItem } from "../LogItem";

export class Task extends LogItem{
  private description: string | undefined;

  constructor(description?: string) {
    super();
    this.description = description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }
}