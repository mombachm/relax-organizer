"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSONFileIOStream_1 = require("./JSONFileIOStream");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var ErrorMessage_1 = require("../utils/messages/ErrorMessage");
var Task_1 = require("../logitem/todo/Task");
var Event_1 = require("../logitem/history/Event");
var MainDAO = /** @class */ (function () {
    function MainDAO() {
    }
    MainDAO.getModel = function () {
        if (!this.model) {
            this.model = this.loadModel();
        }
        return this.model;
    };
    MainDAO.loadModel = function () {
        var streamIO = JSONFileIOStream_1.JSONFileIOStream.getInstance();
        var modelJSON = streamIO.readJSON();
        var model = this.populateModel(modelJSON);
        return model;
    };
    MainDAO.saveModel = function (model) {
        var streamIO = JSONFileIOStream_1.JSONFileIOStream.getInstance();
        streamIO.saveJSON(model);
    };
    MainDAO.populateModel = function (modelJSON) {
        if (!modelJSON) {
            return null;
        }
        var tasks = [];
        var history = [];
        var model = {
            tasks: tasks,
            history: history
        };
        if (modelJSON.tasks) {
            var tasksObj = modelJSON.tasks;
            tasksObj.forEach(function (taskObj) {
                var task = new Task_1.Task();
                Object.assign(task, taskObj);
                model.tasks.push(task);
            });
        }
        else {
            throw new ErrorMessage_1.default(MessageConstants_1.default.IOStream.ReadError);
        }
        if (modelJSON.history) {
            var historyObj = modelJSON.history;
            historyObj.forEach(function (eventObj) {
                var event = new Event_1.Event();
                Object.assign(event, eventObj);
                model.history.push(event);
            });
        }
        else {
            throw new ErrorMessage_1.default(MessageConstants_1.default.IOStream.ReadError);
        }
        return model;
    };
    return MainDAO;
}());
exports.MainDAO = MainDAO;
//# sourceMappingURL=MainDAO.js.map