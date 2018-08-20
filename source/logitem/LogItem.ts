export interface LogItemDef {
  getId(): number;
  getCreationDate(): Date;
}

export abstract class LogItem implements LogItemDef {
  protected id: number;
  protected creationDate: Date;

  constructor() {
    this.id = new Date().getTime();
    this.creationDate = new Date();
  }

  public getId(): number {
    return this.id;
  }
  
  public getCreationDate(): Date {
    return new Date(this.creationDate);
  }
}