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
var ErrorMessage_1 = require("../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var EventService_1 = require("../io/services/EventService");
var DeleteEventCommand = /** @class */ (function (_super) {
    __extends(DeleteEventCommand, _super);
    function DeleteEventCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.eventService = new EventService_1.EventService();
        return _this;
    }
    DeleteEventCommand.prototype.execute = function () {
        if (!this.hasArguments()) {
            return;
        }
        var eventsIds = this.getIdsFromArguments();
        this.eventService.deleteEvents(eventsIds);
    };
    DeleteEventCommand.prototype.getIdsFromArguments = function () {
        var eventsIds = [];
        try {
            this.arguments.forEach(function (eventId) {
                eventsIds.push(Number(eventId));
            });
        }
        catch (e) {
            throw new ErrorMessage_1.default(MessageConstants_1.default.Commands.DeleteLogItemCommand.Error.InvalidIds);
        }
        return eventsIds;
    };
    return DeleteEventCommand;
}(Command_1.AbstractCommand));
exports.DeleteEventCommand = DeleteEventCommand;
//# sourceMappingURL=DeleteEventCommand.js.map