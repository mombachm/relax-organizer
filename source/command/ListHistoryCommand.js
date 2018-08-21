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
var InfoMessage_1 = require("../utils/messages/InfoMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var Message_1 = require("../utils/messages/Message");
var EventService_1 = require("../io/services/EventService");
var ListHistoryCommand = /** @class */ (function (_super) {
    __extends(ListHistoryCommand, _super);
    function ListHistoryCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.eventService = new EventService_1.EventService();
        return _this;
    }
    ListHistoryCommand.prototype.execute = function () {
        var history = this.loadHistory();
        if (history.length) {
            this.listHistoryByDate(history);
        }
        else {
            throw new InfoMessage_1.default(MessageConstants_1.default.Info.ListHistoryCommand.NoEvents);
        }
    };
    ListHistoryCommand.prototype.loadHistory = function () {
        var history = this.eventService.listEvents();
        return history;
    };
    ListHistoryCommand.prototype.listHistoryByDate = function (history) {
        var date;
        console.log("\n\n\n");
        history.forEach(function (event) {
            if (date && event.getCreationDate().toDateString() !== date.toDateString()) {
                date = event.getCreationDate();
                console.log("\n" + Message_1.MessageColor.FgGray + event.getCreationDate().toDateString());
            }
            else if (!date) {
                date = event.getCreationDate();
                console.log("\n" + Message_1.MessageColor.FgGray + event.getCreationDate().toDateString());
            }
            console.log(Message_1.MessageColor.FgGray + "------- Event: " + event.getId().toString() + " -------" + Message_1.MessageColor.Reset);
            console.log(Message_1.MessageColor.FgYellow + "  " + event.toString() + Message_1.MessageColor.Reset);
        });
        console.log(Message_1.MessageColor.FgBlue + "\n\n\n");
    };
    return ListHistoryCommand;
}(Command_1.AbstractCommand));
exports.ListHistoryCommand = ListHistoryCommand;
//# sourceMappingURL=ListHistoryCommand.js.map