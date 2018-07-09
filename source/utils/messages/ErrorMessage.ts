import { MessageColor, AbstractMessage } from "./Message";

export default class ErrorMessage extends AbstractMessage {
  public getText(): string {
    return MessageColor.FgRed + this.text + MessageColor.Reset;
  }

  protected setDefaultMessage() {
    this.text = "Error";
  }
}