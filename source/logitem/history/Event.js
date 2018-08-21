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
var LogItem_1 = require("../LogItem");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(description) {
        var _this = _super.call(this) || this;
        _this.description = description || "";
        return _this;
    }
    Event.prototype.setDescription = function (description) {
        this.description = description;
    };
    Event.prototype.getDescription = function () {
        return this.description;
    };
    Event.prototype.toString = function () {
        return this.formatEventInfo();
    };
    Event.prototype.formatEventInfo = function () {
        var description = this.getDescription();
        var eventInfo = description;
        return eventInfo;
    };
    return Event;
}(LogItem_1.LogItem));
exports.Event = Event;
//# sourceMappingURL=Event.js.map