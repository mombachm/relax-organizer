"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var CommandType;
(function (CommandType) {
    CommandType[CommandType["ToDo"] = 0] = "ToDo";
    CommandType[CommandType["History"] = 1] = "History";
    CommandType[CommandType["ListTasks"] = 2] = "ListTasks";
    CommandType[CommandType["ListHistory"] = 3] = "ListHistory";
    CommandType[CommandType["DeleteEvents"] = 4] = "DeleteEvents";
    CommandType[CommandType["DeleteTasks"] = 5] = "DeleteTasks";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
exports.CommandCode = (_a = {},
    _a["td"] = CommandType.ToDo,
    _a["h"] = CommandType.History,
    _a["lt"] = CommandType.ListTasks,
    _a["lh"] = CommandType.ListHistory,
    _a["de"] = CommandType.DeleteEvents,
    _a["dt"] = CommandType.DeleteTasks,
    _a);
var AbstractCommand = /** @class */ (function () {
    function AbstractCommand(commandArguments) {
        this.arguments = commandArguments;
    }
    AbstractCommand.prototype.setArguments = function (commandArguments) {
        this.arguments = commandArguments;
    };
    AbstractCommand.prototype.hasArguments = function () {
        return Boolean(this.arguments.length);
    };
    AbstractCommand.prototype.execute = function () {
        console.log("Default command.");
    };
    return AbstractCommand;
}());
exports.AbstractCommand = AbstractCommand;
//# sourceMappingURL=Command.js.map