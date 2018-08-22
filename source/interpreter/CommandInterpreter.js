"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("../command/Command");
var ErrorMessage_1 = require("../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var Constants_1 = require("../utils/Constants");
var CommandIntepreter = /** @class */ (function () {
    function CommandIntepreter() {
    }
    CommandIntepreter.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        return new CommandIntepreter();
    };
    CommandIntepreter.prototype.getCommandType = function (processArguments) {
        if (this.hasNoArguments(processArguments)) {
            throw new ErrorMessage_1.default(MessageConstants_1.default.Error.Interpreter.InvalidCommand);
        }
        var command = processArguments[0];
        switch (command) {
            case Constants_1.default.Commands.ToDo:
                return Command_1.CommandType.ToDo;
            case Constants_1.default.Commands.History:
                return Command_1.CommandType.History;
            case Constants_1.default.Commands.ListTasks:
                return Command_1.CommandType.ListTasks;
            case Constants_1.default.Commands.ListHistory:
                return Command_1.CommandType.ListHistory;
            case Constants_1.default.Commands.DeleteEvents:
                return Command_1.CommandType.DeleteEvents;
            case Constants_1.default.Commands.DeleteTasks:
                return Command_1.CommandType.DeleteTasks;
            default:
                throw new ErrorMessage_1.default(MessageConstants_1.default.Error.Interpreter.InvalidCommand);
        }
    };
    CommandIntepreter.prototype.hasNoArguments = function (processArguments) {
        if (processArguments.length) {
            return false;
        }
        return true;
    };
    return CommandIntepreter;
}());
exports.default = CommandIntepreter;
//# sourceMappingURL=CommandInterpreter.js.map