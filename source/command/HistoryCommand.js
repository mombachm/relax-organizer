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
var EventService_1 = require("../io/services/EventService");
var Event_1 = require("../logitem/history/Event");
var HistoryCommand = /** @class */ (function (_super) {
    __extends(HistoryCommand, _super);
    function HistoryCommand(commandArguments) {
        var _this = _super.call(this, commandArguments) || this;
        _this.eventService = new EventService_1.EventService();
        return _this;
    }
    HistoryCommand.prototype.execute = function () {
        if (!this.hasArguments()) {
            return;
        }
        var events = this.createEventsForArguments();
        this.saveEvents(events);
    };
    HistoryCommand.prototype.hasArguments = function () {
        return Boolean(this.arguments.length);
    };
    HistoryCommand.prototype.createEventsForArguments = function () {
        var events = [];
        this.arguments.forEach(function (eventDescription) {
            var event = new Event_1.Event(eventDescription);
            events.push(event);
        });
        return events;
    };
    HistoryCommand.prototype.saveEvents = function (events) {
        var _this = this;
        events.forEach(function (event) {
            _this.eventService.createEvent(event);
        });
    };
    return HistoryCommand;
}(Command_1.AbstractCommand));
exports.HistoryCommand = HistoryCommand;
//# sourceMappingURL=HistoryCommand.js.map