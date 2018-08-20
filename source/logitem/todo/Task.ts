import { LogItem } from "../LogItem";

export class Task extends LogItem{
  private description: string;

  constructor(description?: string) {
    super();
    this.description = description || "";
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public toString() {
    return this.formatTaskInfo();
  }

  private formatTaskInfo(): string {
    const description = this.getDescription();
    const taskInfo = description;
    return taskInfo;
  }
}