"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandType;
(function (CommandType) {
    CommandType[CommandType["ToDo"] = 0] = "ToDo";
    CommandType[CommandType["History"] = 1] = "History";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
var AbstractCommand = /** @class */ (function () {
    function AbstractCommand(commandArguments) {
        this.arguments = commandArguments;
    }
    AbstractCommand.prototype.setArguments = function (commandArguments) {
        this.arguments = commandArguments;
    };
    AbstractCommand.prototype.execute = function () {
        console.log("Default command.");
    };
    return AbstractCommand;
}());
exports.AbstractCommand = AbstractCommand;
//# sourceMappingURL=Command.js.map