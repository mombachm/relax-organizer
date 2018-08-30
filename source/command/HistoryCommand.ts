import { AbstractCommand } from "./Command";
import { EventService } from "../io/services/EventService";
import { Event } from "../logitem/history/Event";
import { ListHistoryCommand } from "./ListHistoryCommand";

export class HistoryCommand extends AbstractCommand {
  private eventService: EventService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.eventService = new EventService();
    this.setNextCommand(new ListHistoryCommand(commandArguments));
  }

  public execute(): void {
    if(!this.hasArguments()) {
      return;
    }
    const events = this.createEventsForArguments();
    this.saveEvents(events);
    super.execute();
  }

  private createEventsForArguments(): Event[] {
    const events: Event[] = [];
    this.arguments.forEach(eventDescription => {
      const event = new Event(eventDescription);
      events.push(event);
    });
    return events;
  }

  private saveEvents(events: Event[]) {
    events.forEach(event => {
      this.eventService.createEvent(event);
    });
  }
}