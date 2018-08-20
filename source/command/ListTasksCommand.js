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
            throw new InfoMessage_1.default(MessageConstants_1.default.Info.TaskListCommand.NoTasks);
        }
    };
    ListTasksCommand.prototype.loadTasks = function () {
        var tasks = this.taskService.listTasks();
        return tasks;
    };
    ListTasksCommand.prototype.listTasksByDate = function (tasks) {
        var date;
        tasks.forEach(function (task) {
            if (date && task.getCreationDate().toDateString() !== date.toDateString()) {
                date = task.getCreationDate();
                console.log(task.getCreationDate().toLocaleDateString());
            }
            else if (!date) {
                date = task.getCreationDate();
                console.log(task.getCreationDate().toLocaleDateString());
            }
            console.log(task.toString());
        });
    };
    return ListTasksCommand;
}(Command_1.AbstractCommand));
exports.ListTasksCommand = ListTasksCommand;
//# sourceMappingURL=ListTasksCommand.js.map