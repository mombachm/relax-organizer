"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogItemService = /** @class */ (function () {
    function LogItemService() {
    }
    LogItemService.prototype.filterDeletedLogItems = function (logItems) {
        var filteredLogItems = logItems.filter(function (logItem) { return !logItem.getDeleted(); });
        return filteredLogItems;
    };
    return LogItemService;
}());
exports.LogItemService = LogItemService;
//# sourceMappingURL=LogItemService.js.map