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
var ErrorMessage_1 = require("../../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../../utils/messages/MessageConstants");
var MainDAO_1 = require("../MainDAO");
var LogItemService_1 = require("./LogItemService");
var EventService = /** @class */ (function (_super) {
    __extends(EventService, _super);
    function EventService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventService.prototype.createEvent = function (event) {
        if (!event) {
            throw new ErrorMessage_1.default(MessageConstants_1.default.Error.Event.FailedToCreate);
        }
        var model = MainDAO_1.MainDAO.getModel();
        model.history.push(event);
        MainDAO_1.MainDAO.saveModel(model);
    };
    EventService.prototype.listEvents = function () {
        var model = MainDAO_1.MainDAO.getModel();
        var history = this.filterDeletedLogItems(model.history);
        return history;
    };
    EventService.prototype.getEventById = function (id) {
        var events = this.listEvents();
        var targetEvent = events.find(function (event) { return event.getId() === id; });
        return targetEvent;
    };
    EventService.prototype.getEventsFromIds = function (ids) {
        var _this = this;
        var events = [];
        ids.forEach(function (id) {
            var event = _this.getEventById(id);
            if (!event) {
                throw new ErrorMessage_1.default(MessageConstants_1.default.LogItemService.Error.InvalidIds);
            }
            events.push(event);
        });
        return events;
    };
    EventService.prototype.updateEvent = function (id, event) {
        var targetEvent = this.getEventById(id);
        if (targetEvent) {
            Object.assign(targetEvent, event);
            targetEvent.setId(id);
        }
        var model = MainDAO_1.MainDAO.getModel();
        MainDAO_1.MainDAO.saveModel(model);
    };
    EventService.prototype.deleteEvent = function (id) {
        var targetEvent = this.getEventById(id);
        if (targetEvent) {
            this.deleteLogItem(targetEvent);
        }
    };
    EventService.prototype.deleteEvents = function (ids) {
        var _this = this;
        var events = this.getEventsFromIds(ids);
        events.forEach(function (task) {
            _this.deleteLogItem(task);
        });
    };
    return EventService;
}(LogItemService_1.LogItemService));
exports.EventService = EventService;
//# sourceMappingURL=EventService.js.map