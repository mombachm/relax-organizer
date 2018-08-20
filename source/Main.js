"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppFacade_1 = require("./AppFacade");
var Main = /** @class */ (function () {
    function Main() {
        this.initArguments();
        this.appFacade = new AppFacade_1.default();
        try {
            this.appFacade.executeCommand(this.arguments);
        }
        catch (message) {
            if (message.getText) {
                console.log(message.getText());
            }
            else {
                console.log(message);
            }
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