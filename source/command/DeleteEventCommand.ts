import { AbstractCommand } from "./Command";
import { Event } from "../logitem/history/Event";
import ErrorMessage from "../utils/messages/ErrorMessage";
import Message from "../utils/messages/MessageConstants";
import { EventService } from "../io/services/EventService";

export class DeleteEventCommand extends AbstractCommand {
  private eventService: EventService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.eventService = new EventService();
  }

  public execute(): void {
    if(!this.hasArguments()) {
      return;
    }
    const eventsIds: number[] = this.getIdsFromArguments();
    this.eventService.deleteEvents(eventsIds);
  }

  private getIdsFromArguments(): number[] {
    const eventsIds: number[] = [];
    try {
      this.arguments.forEach(eventId => {
        eventsIds.push(Number(eventId));
      });
    } catch (e) {
      throw new ErrorMessage(Message.Commands.DeleteLogItemCommand.Error.InvalidIds);
    }
    return eventsIds;
  }
}