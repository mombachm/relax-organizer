"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../utils/Constants");
var ErrorMessage_1 = require("../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var JSONFileIOStream = /** @class */ (function () {
    function JSONFileIOStream() {
        this.fs = require('fs');
    }
    JSONFileIOStream.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        return new JSONFileIOStream();
    };
    JSONFileIOStream.prototype.saveJSON = function (model) {
        this.createDirIfNeeded(Constants_1.default.Data.Path);
        this.createDirIfNeeded(Constants_1.default.Data.Backup.Path);
        var JSONModel = JSON.stringify(model);
        try {
            this.fs.writeFileSync(Constants_1.default.Data.Path + "/data.json", JSONModel);
            this.fs.writeFileSync(Constants_1.default.Data.Backup.Path + "/data_" + new Date().toLocaleDateString().replace(/[/]/g, "_") + ".json", JSONModel);
        }
        catch (e) {
            throw new ErrorMessage_1.default(MessageConstants_1.default.IOStream.WriteError);
        }
    };
    JSONFileIOStream.prototype.readJSON = function () {
        try {
            var data = this.fs.readFileSync(Constants_1.default.Data.Path + "/data.json");
            return JSON.parse(data);
        }
        catch (e) {
            throw new ErrorMessage_1.default(MessageConstants_1.default.IOStream.ReadError);
        }
    };
    JSONFileIOStream.prototype.createDirIfNeeded = function (dirPath) {
        var dir = Constants_1.default.Data.Path;
        if (!this.fs.existsSync(dirPath)) {
            this.fs.mkdirSync(dirPath);
        }
    };
    return JSONFileIOStream;
}());
exports.JSONFileIOStream = JSONFileIOStream;
//# sourceMappingURL=JSONFileIOStream.js.map