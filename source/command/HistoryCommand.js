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
var HistoryCommand = /** @class */ (function (_super) {
    __extends(HistoryCommand, _super);
    function HistoryCommand(commandArguments) {
        return _super.call(this, commandArguments) || this;
    }
    HistoryCommand.prototype.execute = function () {
        console.log("History Command.");
    };
    return HistoryCommand;
}(Command_1.AbstractCommand));
exports.HistoryCommand = HistoryCommand;
//# sourceMappingURL=HistoryCommand.js.map