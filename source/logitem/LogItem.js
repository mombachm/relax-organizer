"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogItem = /** @class */ (function () {
    function LogItem() {
        this.id = new Date().getTime();
        this.creationDate = new Date();
    }
    LogItem.prototype.getId = function () {
        return this.id;
    };
    LogItem.prototype.getCreationDate = function () {
        return new Date(this.creationDate);
    };
    return LogItem;
}());
exports.LogItem = LogItem;
//# sourceMappingURL=LogItem.js.map