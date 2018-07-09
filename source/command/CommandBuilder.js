"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandBuilder = /** @class */ (function () {
    function CommandBuilder() {
    }
    CommandBuilder.prototype.setCommandType = function (commandType) {
        this.commandType = commandType;
    };
    CommandBuilder.prototype.setArguments = function (commandArguments) {
        this.commandArguments = commandArguments;
        this.commandArguments.splice(0, 1);
    };
    CommandBuilder.prototype.buildCommand = function () {
        console.log(this.commandArguments);
    };
    return CommandBuilder;
}());
exports.CommandBuilder = CommandBuilder;
//# sourceMappingURL=CommandBuilder.js.map