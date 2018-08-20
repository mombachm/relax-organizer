import AppFacade from "./AppFacade";
class Main {
  private arguments: string[]
  private appFacade: AppFacade;

  constructor() {
    this.initArguments();
    this.appFacade = new AppFacade();
    try {
      this.appFacade.executeCommand(this.arguments);
    } catch(message) {
      if (message.getText) {
        console.log(message.getText());
      } else {
        console.log(message);
      }
    }
  }

  private initArguments() {
    this.arguments = process.argv;
    this.arguments.splice(0, 2);
  }
}
export default new Main();