import { Task } from "../../logitem/todo/Task";
import { Event } from "../../logitem/history/Event";

export interface Model {
  tasks: Task[];
  history: Event[];
}