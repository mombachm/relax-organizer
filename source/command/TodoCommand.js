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
var TodoCommand = /** @class */ (function (_super) {
    __extends(TodoCommand, _super);
    function TodoCommand(commandArguments) {
        return _super.call(this, commandArguments) || this;
    }
    TodoCommand.prototype.execute = function () {
        console.log("ToDo Command.");
        if (!this.hasArguments()) {
            return;
        }
        var task = new Task_1.Task();
        console.log(this.arguments);
    };
    TodoCommand.prototype.hasArguments = function () {
        return Boolean(this.arguments.length);
    };
    return TodoCommand;
}(Command_1.AbstractCommand));
exports.TodoCommand = TodoCommand;
//# sourceMappingURL=TodoCommand.js.map