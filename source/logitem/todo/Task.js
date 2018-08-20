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
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(description) {
        var _this = _super.call(this) || this;
        _this.description = description || "";
        return _this;
    }
    Task.prototype.setDescription = function (description) {
        this.description = description;
    };
    Task.prototype.getDescription = function () {
        return this.description;
    };
    Task.prototype.toString = function () {
        return this.formatTaskInfo();
    };
    Task.prototype.formatTaskInfo = function () {
        var description = this.getDescription();
        var taskInfo = description;
        return taskInfo;
    };
    return Task;
}(LogItem_1.LogItem));
exports.Task = Task;
//# sourceMappingURL=Task.js.map