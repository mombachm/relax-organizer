import Constants from "../utils/Constants";
import ErrorMessage from "../utils/messages/ErrorMessage";
import ErrorMessageText from "../utils/messages/MessageConstants";


export class JSONFileIOStream {
  private fs = require('fs');
  private instance: JSONFileIOStream;

  public getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return new JSONFileIOStream();
  }

  public saveJSON(model: Object) {
    var dir = this.createDirIfNeeded();

    try {
      this.fs.writeFileSync(dir + "/data.json", model);
    } catch(e) {
      throw new ErrorMessage(ErrorMessageText.IOStream.WriteError);
    }
  }

  public readJSON(): Object {
    try {
      const data = this.fs.readFileSync(Constants.Data.Path + "/data.json");
      return JSON.parse(data);
    } catch(e) {
      throw new ErrorMessage(ErrorMessageText.IOStream.ReadError);
    }
  }

  private createDirIfNeeded(): string {
    var dir = Constants.Data.Path;
    if (!this.fs.existsSync(dir)){
        this.fs.mkdirSync(dir);
    }
    return dir;
  }
}