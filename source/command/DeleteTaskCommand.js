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
var DeleteTaskCommand = /** @class */ (function (_super) {
    __extends(DeleteTaskCommand, _super);
    function DeleteTaskCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.taskService = new TaskService_1.TaskService();
        return _this;
    }
    DeleteTaskCommand.prototype.execute = function () {
        if (!this.hasArguments()) {
            return;
        }
        var tasksIds = this.getLogItemsIdsFromArguments();
        this.taskService.deleteTasks(tasksIds);
    };
    return DeleteTaskCommand;
}(Command_1.AbstractCommand));
exports.DeleteTaskCommand = DeleteTaskCommand;
//# sourceMappingURL=DeleteTaskCommand.js.map