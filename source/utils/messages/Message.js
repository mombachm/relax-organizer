"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractMessage = /** @class */ (function () {
    function AbstractMessage(text) {
        if (text) {
            this.text = text;
        }
        else {
            this.setDefaultMessage();
        }
    }
    AbstractMessage.prototype.getText = function () {
        return this.text;
    };
    AbstractMessage.prototype.setDefaultMessage = function () {
        this.text = "Message";
    };
    return AbstractMessage;
}());
exports.AbstractMessage = AbstractMessage;
var MessageColor;
(function (MessageColor) {
    MessageColor["Reset"] = "\u001B[0m";
    MessageColor["Bright"] = "\u001B[1m";
    MessageColor["Dim"] = "\u001B[2m";
    MessageColor["Underscore"] = "\u001B[4m";
    MessageColor["Blink"] = "\u001B[5m";
    MessageColor["Reverse"] = "\u001B[7m";
    MessageColor["Hidden"] = "\u001B[8m";
    MessageColor["FgBlack"] = "\u001B[30m";
    MessageColor["FgRed"] = "\u001B[31m";
    MessageColor["FgGreen"] = "\u001B[32m";
    MessageColor["FgYellow"] = "\u001B[33m";
    MessageColor["FgBlue"] = "\u001B[34m";
    MessageColor["FgMagenta"] = "\u001B[35m";
    MessageColor["FgCyan"] = "\u001B[36m";
    MessageColor["FgWhite"] = "\u001B[37m";
    MessageColor["BgBlack"] = "\u001B[40m";
    MessageColor["BgRed"] = "\u001B[41m";
    MessageColor["BgGreen"] = "\u001B[42m";
    MessageColor["BgYellow"] = "\u001B[43m";
    MessageColor["BgBlue"] = "\u001B[44m";
    MessageColor["BgMagenta"] = "\u001B[45m";
    MessageColor["BgCyan"] = "\u001B[46m";
    MessageColor["BgWhite"] = "\u001B[47m";
})(MessageColor = exports.MessageColor || (exports.MessageColor = {}));
//# sourceMappingURL=Message.js.map