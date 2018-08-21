"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogItem = /** @class */ (function () {
    function LogItem() {
        this.id = new Date().getTime();
        this.creationDate = new Date();
        this.deleted = false;
    }
    LogItem.prototype.setId = function (id) {
        this.id = id;
    };
    LogItem.prototype.getId = function () {
        return this.id;
    };
    LogItem.prototype.getCreationDate = function () {
        return new Date(this.creationDate);
    };
    LogItem.prototype.setDeleted = function (deleted) {
        this.deleted = deleted;
    };
    LogItem.prototype.getDeleted = function () {
        return this.deleted;
    };
    return LogItem;
}());
exports.LogItem = LogItem;
//# sourceMappingURL=LogItem.js.map