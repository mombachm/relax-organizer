import { AbstractCommand } from "./Command";
import InfoMessage from "../utils/messages/InfoMessage";
import Message from "../utils/messages/MessageConstants";
import { MessageColor } from "../utils/messages/Message";
import { EventService } from "../io/services/EventService";
import { Event } from "../logitem/history/Event";

export class ListHistoryCommand extends AbstractCommand {
  private eventService: EventService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.eventService = new EventService();
  }

  public execute(): void {
    const history: Event[] = this.loadHistory();
    if(history.length) {
      this.listHistoryByDate(history);
    } else {
      throw new InfoMessage(Message.Info.ListHistoryCommand.NoEvents);
    }
  }

  private loadHistory(): Event[] {
    const history: Event[] = this.eventService.listEvents();
    return history;
  }

  private listHistoryByDate(history: Event[]) {
    let date: Date;
    console.log("\n\n\n");
    history.forEach(event => {
      if(date && event.getCreationDate().toDateString() !== date.toDateString()) {
        date = event.getCreationDate();
        console.log("\n" + MessageColor.FgGray + event.getCreationDate().toDateString());
      } else if (!date) {
        date = event.getCreationDate();
        console.log("\n" + MessageColor.FgGray + event.getCreationDate().toDateString());
      }
      console.log(MessageColor.FgGray + "------- Event: " + event.getId().toString() + " -------" + MessageColor.Reset);
      console.log(MessageColor.FgYellow + "  " + event.toString() + MessageColor.Reset);
    });
    console.log(MessageColor.FgBlue + "\n\n\n");
  }
}