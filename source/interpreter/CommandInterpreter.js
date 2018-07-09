"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("../command/Command");
var ErrorMessage_1 = require("../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
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
            throw new ErrorMessage_1.default(MessageConstants_1.default.InvalidCommand);
        }
        var command = processArguments[0];
        switch (command) {
            case "td":
                return Command_1.CommandType.ToDo;
                break;
            case "ht":
                return Command_1.CommandType.History;
                break;
            default:
                throw new ErrorMessage_1.default(MessageConstants_1.default.InvalidCommand);
                break;
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