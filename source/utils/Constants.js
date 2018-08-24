"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appRoot = require('app-root-path');
var Constants = {
    Data: {
        Path: appRoot.path + "/data",
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
exports.default = Constants;
//# sourceMappingURL=Constants.js.map