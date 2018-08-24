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
var CompleteTaskCommand = /** @class */ (function (_super) {
    __extends(CompleteTaskCommand, _super);
    function CompleteTaskCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.taskService = new TaskService_1.TaskService();
        return _this;
    }
    CompleteTaskCommand.prototype.execute = function () {
        if (!this.hasArguments()) {
            return;
        }
        var tasksIds = this.getLogItemsIdsFromArguments();
        this.completeTasks(tasksIds);
    };
    CompleteTaskCommand.prototype.completeTasks = function (ids) {
        var _this = this;
        var tasks = this.taskService.getTasksFromIds(ids);
        tasks.forEach(function (task) {
            task.setStatus(Task_1.TaskStatus.Completed);
            _this.taskService.updateTask(task.getId(), task);
        });
    };
    return CompleteTaskCommand;
}(Command_1.AbstractCommand));
exports.CompleteTaskCommand = CompleteTaskCommand;
//# sourceMappingURL=CompleteTaskCommand.js.map