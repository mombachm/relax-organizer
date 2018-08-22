import { LogItem } from "../../logitem/LogItem";

export abstract class LogItemService {
  protected filterDeletedLogItems(logItems: LogItem[]): LogItem[] {
    const filteredLogItems = logItems.filter((logItem) => !logItem.getDeleted());
    return filteredLogItems;
  }
}