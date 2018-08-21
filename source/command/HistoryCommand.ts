import { AbstractCommand } from "./Command";
import { EventService } from "../io/services/EventService";
import { Event } from "../logitem/history/Event";

export class HistoryCommand extends AbstractCommand {
  private eventService: EventService;

  constructor(commandArguments: string[]) {
    super(commandArguments);
    this.eventService = new EventService();
  }

  public execute(): void {
    if(!this.hasArguments()) {
      return;
    }
    const events = this.createEventsForArguments();
    this.saveEvents(events);
  }

  private hasArguments(): boolean {
    return Boolean(this.arguments.length)
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