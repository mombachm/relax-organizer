"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSONFileIOStream_1 = require("../JSONFileIOStream");
var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.createTask = function (task) {
        var stream = JSONFileIOStream_1.JSONFileIOStream.getInstance();
        // console.stream.readJSON();
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=TaskService.js.map