import { LogItem } from "../LogItem";

export enum TaskStatus {
  Open,
  Completed
}
export class Task extends LogItem{
  private description: string;
  private status: TaskStatus;

  constructor(description?: string) {
    super();
    this.description = description || "";
    this.status = TaskStatus.Open;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public setStatus(status: TaskStatus) {
    this.status = status;
  }

  public getStatus(): TaskStatus {
    return this.status;
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