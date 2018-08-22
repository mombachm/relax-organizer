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
var MainDAO_1 = require("../MainDAO");
var ErrorMessage_1 = require("../../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../../utils/messages/MessageConstants");
var LogItemService_1 = require("./LogItemService");
var TaskService = /** @class */ (function (_super) {
    __extends(TaskService, _super);
    function TaskService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskService.prototype.createTask = function (task) {
        if (!task) {
            throw new ErrorMessage_1.default(MessageConstants_1.default.Error.Task.FailedToCreate);
        }
        var model = MainDAO_1.MainDAO.getModel();
        model.tasks.push(task);
        MainDAO_1.MainDAO.saveModel(model);
    };
    TaskService.prototype.listTasks = function () {
        var model = MainDAO_1.MainDAO.getModel();
        var tasks = this.filterDeletedLogItems(model.tasks);
        return tasks;
    };
    TaskService.prototype.getTaskById = function (id) {
        var tasks = this.listTasks();
        var targetTask = tasks.find(function (task) { return task.getId() === id; });
        return targetTask;
    };
    TaskService.prototype.updateTask = function (id, task) {
        var targetTask = this.getTaskById(id);
        if (targetTask) {
            Object.assign(targetTask, task);
            targetTask.setId(id);
        }
        var model = MainDAO_1.MainDAO.getModel();
        MainDAO_1.MainDAO.saveModel(model);
    };
    TaskService.prototype.deleteTask = function (id) {
        var targetTask = this.getTaskById(id);
        if (targetTask) {
            this.deleteLogItem(targetTask);
        }
    };
    return TaskService;
}(LogItemService_1.LogItemService));
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map