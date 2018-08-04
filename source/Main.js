"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppFacade_1 = require("./AppFacade");
var JSONFileIOStream_1 = require("./io/JSONFileIOStream");
var Main = /** @class */ (function () {
    function Main() {
        this.initArguments();
        this.appFacade = new AppFacade_1.default();
        try {
            this.appFacade.executeCommand(this.arguments);
            var streamIO = new JSONFileIOStream_1.JSONFileIOStream();
            console.log(streamIO.readJSON());
        }
        catch (message) {
            console.log(message.getText());
        }
    }
    Main.prototype.initArguments = function () {
        this.arguments = process.argv;
        this.arguments.splice(0, 2);
    };
    return Main;
}());
exports.default = new Main();
//# sourceMappingURL=Main.js.map