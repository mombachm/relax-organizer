import ErrorMessage from "../../utils/messages/ErrorMessage";
import Message from "../../utils/messages/MessageConstants";
import { MainDAO } from "../MainDAO";
import { Event } from "../../logitem/history/Event";

export interface EventService {
  listEvents(): Event[];
  createEvent(event: Event): void;
  updateEvent(event: Event): void;
  deleteEvent(id: number): void;
  getEventById(id: number): void;
}

export class EventService implements EventService {

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
    return model.history;
  }

  public getEventById(id: number): Event | undefined {
    const events = this.listEvents();
    const targetEvent = events.find((event) => event.getId() === id);
    return targetEvent;
  }

  public updateEvent(event: Event): void {

  }

}