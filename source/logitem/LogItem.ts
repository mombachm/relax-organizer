export interface LogItemDef {
  getId(): number;
  getCreationDate(): Date;
}

export abstract class LogItem implements LogItemDef {
  protected id: number;
  protected creationDate: Date;

  public getId(): number {
    return this.id;
  }
  
  public getCreationDate(): Date {
    return this.creationDate;
  }
}