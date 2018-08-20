import Constants from "../utils/Constants";
import ErrorMessage from "../utils/messages/ErrorMessage";
import Message from "../utils/messages/MessageConstants";
import { Task } from "../logitem/todo/Task";


export class JSONFileIOStream {
  private fs = require('fs');
  private static instance: JSONFileIOStream;

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return new JSONFileIOStream();
  }

  public saveJSON(model: any) {
    this.createDirIfNeeded(Constants.Data.Path);
    this.createDirIfNeeded(Constants.Data.Backup.Path);
    const JSONModel = JSON.stringify(model);
    try {
      this.fs.writeFileSync(Constants.Data.Path + "/data.json", JSONModel);
      this.fs.writeFileSync(Constants.Data.Backup.Path + "/data_" + new Date().toLocaleDateString().replace(/[/]/g,"_") + ".json", JSONModel);
    } catch(e) {
      throw new ErrorMessage(Message.Error.IOStream.WriteError);
    }
  }

  public readJSON(): any {
    try {
      const data = this.fs.readFileSync(Constants.Data.Path + "/data.json");
      return JSON.parse(data);
    } catch(e) {
      throw new ErrorMessage(Message.Error.IOStream.ReadError);
    }
  }

  private createDirIfNeeded(dirPath: string) {
    var dir = Constants.Data.Path;
    if (!this.fs.existsSync(dirPath)){
        this.fs.mkdirSync(dirPath);
    }
  }
}