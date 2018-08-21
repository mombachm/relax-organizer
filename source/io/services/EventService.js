"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessage_1 = require("../../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../../utils/messages/MessageConstants");
var MainDAO_1 = require("../MainDAO");
var EventService = /** @class */ (function () {
    function EventService() {
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
        return model.history;
    };
    EventService.prototype.getEventById = function (id) {
        var events = this.listEvents();
        var targetEvent = events.find(function (event) { return event.getId() === id; });
        return targetEvent;
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
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=EventService.js.map