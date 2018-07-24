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
var TaskItem = /** @class */ (function (_super) {
    __extends(TaskItem, _super);
    function TaskItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TaskItem;
}(LogItem_1.LogItem));
exports.TaskItem = TaskItem;
//# sourceMappingURL=TaskItem.js.map