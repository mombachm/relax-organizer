"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogItem = /** @class */ (function () {
    function LogItem() {
        this.creationDate = new Date();
        console.log(this.creationDate);
    }
    LogItem.prototype.getId = function () {
        return this.id;
    };
    LogItem.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    return LogItem;
}());
exports.LogItem = LogItem;
//# sourceMappingURL=LogItem.js.map