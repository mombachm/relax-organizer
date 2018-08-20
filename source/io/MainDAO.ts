import { Model } from "./model/Model";
import { JSONFileIOStream } from "./JSONFileIOStream";
import Message from "../utils/messages/MessageConstants";
import ErrorMessage from "../utils/messages/ErrorMessage";
import { Task } from "../logitem/todo/Task";
import { Event } from "../logitem/history/Event";

export class MainDAO {
  private static model: Model | null;

  public static getModel(): Model {
    if(!this.model) {
      this.model = this.loadModel();
    }
    return this.model;
  }

  private static loadModel(): Model {
    const streamIO = JSONFileIOStream.getInstance();
    const modelJSON = streamIO.readJSON();
    const model = this.populateModel(modelJSON);
    if (!model) {
      throw new ErrorMessage(Message.Error.Data.NotLoaded);
    }
    return model;
  }
  
  public static saveModel(model: Model) {
    const streamIO = JSONFileIOStream.getInstance();
    streamIO.saveJSON(model);
  }
  
  private static populateModel(modelJSON: any): Model | null {
    if(!modelJSON) {
      return null;
    }
    const tasks: Task[] = [];
    const history: Event[] = [];
    const model: Model = {
      tasks,
      history
    };
    if(modelJSON.tasks) {
      const tasksObj: any[] = modelJSON.tasks;
      tasksObj.forEach(taskObj => {
        const task: Task = new Task();
        Object.assign(task, taskObj);
        model.tasks.push(task);
      });
    } else {
      throw new ErrorMessage(Message.Error.IOStream.ReadError);
    }
    if(modelJSON.history) {
      const historyObj: any[] = modelJSON.history;
      historyObj.forEach(eventObj => {
        const event: Event = new Event();
        Object.assign(event, eventObj);
        model.history.push(event);
      });
    } else {
      throw new ErrorMessage(Message.Error.IOStream.ReadError);
    }
    return model;
  }
}