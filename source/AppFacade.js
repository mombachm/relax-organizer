"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandInterpreter_1 = require("./interpreter/CommandInterpreter");
var CommandBuilder_1 = require("./command/CommandBuilder");
var AppFacade = /** @class */ (function () {
    function AppFacade() {
        this.commandInterpreter = CommandInterpreter_1.default.getInstance();
    }
    AppFacade.prototype.executeCommand = function (processArguments) {
        var commandType = this.commandInterpreter.getCommandType(processArguments);
        var commandBuilder = new CommandBuilder_1.CommandBuilder();
        commandBuilder.setCommandType(commandType);
        commandBuilder.setArguments(processArguments);
        commandBuilder.buildCommand();
    };
    return AppFacade;
}());
exports.default = AppFacade;
//# sourceMappingURL=AppFacade.js.map