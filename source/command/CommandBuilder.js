"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var TodoCommand_1 = require("./TodoCommand");
var HistoryCommand_1 = require("./HistoryCommand");
var ListTasksCommand_1 = require("./ListTasksCommand");
var ListHistoryCommand_1 = require("./ListHistoryCommand");
var DeleteTaskCommand_1 = require("./DeleteTaskCommand");
var DeleteEventCommand_1 = require("./DeleteEventCommand");
var CompleteTaskCommand_1 = require("./CompleteTaskCommand");
var CommandBuilder = /** @class */ (function () {
    function CommandBuilder() {
    }
    CommandBuilder.prototype.setCommandType = function (commandType) {
        this.commandType = commandType;
    };
    CommandBuilder.prototype.setArguments = function (commandArguments) {
        this.commandArguments = commandArguments;
        this.commandArguments.shift();
    };
    CommandBuilder.prototype.buildCommand = function () {
        switch (this.commandType) {
            case Command_1.CommandType.ToDo:
                return new TodoCommand_1.TodoCommand(this.commandArguments);
            case Command_1.CommandType.History:
                return new HistoryCommand_1.HistoryCommand(this.commandArguments);
            case Command_1.CommandType.ListTasks:
                return new ListTasksCommand_1.ListTasksCommand(this.commandArguments);
            case Command_1.CommandType.ListHistory:
                return new ListHistoryCommand_1.ListHistoryCommand(this.commandArguments);
            case Command_1.CommandType.DeleteTasks:
                return new DeleteTaskCommand_1.DeleteTaskCommand(this.commandArguments);
            case Command_1.CommandType.DeleteEvents:
                return new DeleteEventCommand_1.DeleteEventCommand(this.commandArguments);
            case Command_1.CommandType.CompleteTask:
                return new CompleteTaskCommand_1.CompleteTaskCommand(this.commandArguments);
            default:
                return null;
        }
    };
    return CommandBuilder;
}());
exports.CommandBuilder = CommandBuilder;
//# sourceMappingURL=CommandBuilder.js.map