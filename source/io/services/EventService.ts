export interface EventService {
  listEvents(): Event[];
  createEvent(event: Event): void;
  updateEvent(event: Event): void;
  deleteEvent(id: number): void;
  getEventById(id: number): void;
}