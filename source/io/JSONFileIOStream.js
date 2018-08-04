"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../utils/Constants");
var ErrorMessage_1 = require("../utils/messages/ErrorMessage");
var MessageConstants_1 = require("../utils/messages/MessageConstants");
var JSONFileIOStream = /** @class */ (function () {
    function JSONFileIOStream() {
        this.fs = require('fs');
    }
    JSONFileIOStream.prototype.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        return new JSONFileIOStream();
    };
    JSONFileIOStream.prototype.saveJSON = function (model) {
        var dir = this.createDirIfNeeded();
        try {
            this.fs.writeFileSync(dir + "/data.json", model);
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
    JSONFileIOStream.prototype.createDirIfNeeded = function () {
        var dir = Constants_1.default.Data.Path;
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir);
        }
        return dir;
    };
    return JSONFileIOStream;
}());
exports.JSONFileIOStream = JSONFileIOStream;
//# sourceMappingURL=JSONFileIOStream.js.map