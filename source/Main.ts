import AppFacade from "./AppFacade";
import { JSONFileIOStream } from "./io/JSONFileIOStream";
class Main {
  private arguments: string[]
  private appFacade: AppFacade;

  constructor() {
    this.initArguments();
    this.appFacade = new AppFacade();


    try {
      this.appFacade.executeCommand(this.arguments);

      const streamIO = new JSONFileIOStream();
      console.log(streamIO.readJSON());
    } catch(message) {
      console.log(message.getText());
    }
  }

  private initArguments() {
    this.arguments = process.argv;
    this.arguments.splice(0, 2);
  }
}
export default new Main();