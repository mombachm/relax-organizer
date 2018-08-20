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
            throw new ErrorMessage_1.default(MessageConstants_1.default.Task.FailedToCreate);
        }
        var model = MainDAO_1.MainDAO.getModel();
        model.tasks.push(task);
        MainDAO_1.MainDAO.saveModel(model);
    };
    TaskService.prototype.listTasks = function () {
        var model = MainDAO_1.MainDAO.getModel();
        return model.tasks;
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map