"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainDAO_1 = require("../MainDAO");
var ErrorMessage_1 = require("../../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../../utils/messages/MessageConstants");
var TaskService = /** @class */ (function () {
    function TaskService() {
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
        return model.tasks;
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
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map