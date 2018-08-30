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
var Task_1 = require("../logitem/todo/Task");
var TaskService_1 = require("../io/services/TaskService");
var ListTasksCommand_1 = require("./ListTasksCommand");
var TodoCommand = /** @class */ (function (_super) {
    __extends(TodoCommand, _super);
    function TodoCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.taskService = new TaskService_1.TaskService();
        _this.setNextCommand(new ListTasksCommand_1.ListTasksCommand(commandArguments));
        return _this;
    }
    TodoCommand.prototype.execute = function () {
        if (!this.hasArguments()) {
            return;
        }
        var tasks = this.createTasksForArguments();
        this.saveTasks(tasks);
        _super.prototype.execute.call(this);
    };
    TodoCommand.prototype.createTasksForArguments = function () {
        var tasks = [];
        this.arguments.forEach(function (taskDescription) {
            var task = new Task_1.Task(taskDescription);
            tasks.push(task);
        });
        return tasks;
    };
    TodoCommand.prototype.saveTasks = function (tasks) {
        var _this = this;
        tasks.forEach(function (task) {
            _this.taskService.createTask(task);
        });
    };
    return TodoCommand;
}(Command_1.AbstractCommand));
exports.TodoCommand = TodoCommand;
//# sourceMappingURL=TodoCommand.js.map