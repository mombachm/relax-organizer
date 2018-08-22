import { LogItem } from "../../logitem/LogItem";
import { MainDAO } from "../MainDAO";

export abstract class LogItemService {
  protected filterDeletedLogItems(logItems: LogItem[]): LogItem[] {
    const filteredLogItems = logItems.filter((logItem) => !logItem.getDeleted());
    return filteredLogItems;
  }

  protected deleteLogItem(logItem: LogItem) {
    logItem.setDeleted(true);
    const model = MainDAO.getModel();
    MainDAO.saveModel(model);
  }
}