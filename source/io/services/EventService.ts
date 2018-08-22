import ErrorMessage from "../../utils/messages/ErrorMessage";
import Message from "../../utils/messages/MessageConstants";
import { MainDAO } from "../MainDAO";
import { Event } from "../../logitem/history/Event";
import { LogItemService } from "./LogItemService";

export interface EventService {
  listEvents(): Event[];
  createEvent(event: Event): void;
  updateEvent(id: number, event: Event): void;
  deleteEvent(id: number): void;
  deleteEvents(id: number[]): void;
  getEventById(id: number): void;
  getEventsById(ids: number[]): Event[];
}

export class EventService extends LogItemService implements EventService {

  public createEvent(event: Event) {
    if(!event) {
      throw new ErrorMessage(Message.Error.Event.FailedToCreate);
    }
    const model = MainDAO.getModel();
    model.history.push(event);
    MainDAO.saveModel(model);
  }

  public listEvents(): Event[] {
    const model = MainDAO.getModel();
    const history = this.filterDeletedLogItems(model.history);
    return history as Event[];
  }

  public getEventById(id: number): Event | undefined {
    const events = this.listEvents();
    const targetEvent = events.find((event) => event.getId() === id);
    return targetEvent;
  }

  public getEventsFromIds(ids: number[]): Event[] {
    const events: Event[] = [];
    ids.forEach(id => {
      const event = this.getEventById(id);
      if(!event) {
        throw new ErrorMessage(Message.LogItemService.Error.InvalidIds);
      }
      events.push(event);
    });
    return events;
  }

  public updateEvent(id: number, event: Event) {
    const targetEvent = this.getEventById(id);
    if (targetEvent) {
      Object.assign(targetEvent, event);
      targetEvent.setId(id);
    }
    const model = MainDAO.getModel();
    MainDAO.saveModel(model);
  }

  public deleteEvent(id: number) {
    const targetEvent = this.getEventById(id);
    if (targetEvent) {
      this.deleteLogItem(targetEvent);
    }
  }

  public deleteEvents(ids: number[]) {
    const events: Event[] = this.getEventsFromIds(ids);
    events.forEach(task => {
      this.deleteLogItem(task);
    });
  }
}