import { LogItem } from "../LogItem";

export class Event extends LogItem{
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
    return this.formatEventInfo();
  }

  private formatEventInfo(): string {
    const description = this.getDescription();
    const eventInfo = description;
    return eventInfo;
  }
}