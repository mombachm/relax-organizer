
var appRoot = require('app-root-path');

const Constants = {
  Data: {
    Path: appRoot.path + "/data",
    Filename: "/data.json",
    Backup: {
      Path: appRoot.path + "/data/backup"
    }
  },
  Commands: {
    History: "h",
    ToDo: "td",
    ListTasks: "lt",
    ListHistory: "lh",
    DeleteEvents: "de",
    DeleteTasks: "dt"
  }
};
export default Constants;
