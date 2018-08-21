"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var TaskService_1 = require("../io/services/TaskService");
var InfoMessage_1 = require("../utils/messages/InfoMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var Message_1 = require("../utils/messages/Message");
var ListTasksCommand = /** @class */ (function (_super) {
    __extends(ListTasksCommand, _super);
    function ListTasksCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.taskService = new TaskService_1.TaskService();
        return _this;
    }
    ListTasksCommand.prototype.execute = function () {
        var tasks = this.loadTasks();
        if (tasks.length) {
            this.listTasksByDate(tasks);
        }
        else {
            throw new InfoMessage_1.default(MessageConstants_1.default.Info.ListTaskCommand.NoTasks);
        }
    };
    ListTasksCommand.prototype.loadTasks = function () {
        var tasks = this.taskService.listTasks();
        return tasks;
    };
    ListTasksCommand.prototype.listTasksByDate = function (tasks) {
        var date;
        console.log("\n\n\n");
        tasks.forEach(function (task) {
            if (date && task.getCreationDate().toDateString() !== date.toDateString()) {
                date = task.getCreationDate();
                console.log("\n" + Message_1.MessageColor.FgGray + task.getCreationDate().toDateString());
            }
            else if (!date) {
                date = task.getCreationDate();
                console.log("\n" + Message_1.MessageColor.FgGray + task.getCreationDate().toDateString());
            }
            console.log(Message_1.MessageColor.FgGray + "------- Task: " + task.getId().toString() + " -------" + Message_1.MessageColor.Reset);
            console.log(Message_1.MessageColor.FgCyan + "  " + task.toString() + Message_1.MessageColor.Reset);
        });
        console.log(Message_1.MessageColor.FgBlue + "\n\n\n");
    };
    return ListTasksCommand;
}(Command_1.AbstractCommand));
exports.ListTasksCommand = ListTasksCommand;
//# sourceMappingURL=ListTasksCommand.js.map