"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainDAO_1 = require("../MainDAO");
var LogItemService = /** @class */ (function () {
    function LogItemService() {
    }
    LogItemService.prototype.filterDeletedLogItems = function (logItems) {
        var filteredLogItems = logItems.filter(function (logItem) { return !logItem.getDeleted(); });
        return filteredLogItems;
    };
    LogItemService.prototype.deleteLogItem = function (logItem) {
        logItem.setDeleted(true);
        var model = MainDAO_1.MainDAO.getModel();
        MainDAO_1.MainDAO.saveModel(model);
    };
    return LogItemService;
}());
exports.LogItemService = LogItemService;
//# sourceMappingURL=LogItemService.js.map