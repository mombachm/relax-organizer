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
var Message_1 = require("./Message");
var InfoMessage = /** @class */ (function (_super) {
    __extends(InfoMessage, _super);
    function InfoMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoMessage.prototype.getText = function () {
        return Message_1.MessageColor.FgCyan + this.text + Message_1.MessageColor.Reset;
    };
    InfoMessage.prototype.setDefaultMessage = function () {
        this.text = "Info";
    };
    return InfoMessage;
}(Message_1.AbstractMessage));
exports.default = InfoMessage;
//# sourceMappingURL=InfoMessage.js.map