import { MessageColor, AbstractMessage } from "./Message";

export default class InfoMessage extends AbstractMessage {
  public getText(): string {
    return MessageColor.FgCyan + this.text + MessageColor.Reset;
  }

  protected setDefaultMessage() {
    this.text = "Info";
  }
}