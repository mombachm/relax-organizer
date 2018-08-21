export interface LogItemDef {
  getId(): number;
  getCreationDate(): Date;
}

export abstract class LogItem implements LogItemDef {
  protected id: number;
  protected creationDate: Date;
  protected deleted: boolean;

  constructor() {
    this.id = new Date().getTime();
    this.creationDate = new Date();
    this.deleted = false;
  }

  public setId(id: number) {
    this.id = id;
  }
  
  public getId(): number {
    return this.id;
  }
  
  public getCreationDate(): Date {
    return new Date(this.creationDate);
  }

  public setDeleted(deleted: boolean) {
    this.deleted = deleted;
  }

  public getDeleted(): boolean {
    return this.deleted;
  }
}