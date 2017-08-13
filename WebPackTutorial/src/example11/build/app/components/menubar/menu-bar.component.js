"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exampleAppModule_1 = require("exampleAppModule");
var MenuBarController = (function () {
    function MenuBarController($log) {
        this.$log = $log;
        $log.info('HomeController Constructor Called');
    }
    MenuBarController.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('HomeController Controller onInit has been called');
        this.echo = 'Im Home';
        console.log(this);
    };
    MenuBarController.$inject = ['$log'];
    MenuBarController.Name = 'MenuBarComponent';
    return MenuBarController;
}());
exports.MenuBarController = MenuBarController;
var MenuBarComponent = (function () {
    function MenuBarComponent() {
        this.controller = MenuBarController;
        this.template = require('./menu-bar.component.html');
        this.transclude = false;
    }
    MenuBarComponent.Name = 'menuBar';
    return MenuBarComponent;
}());
exports.MenuBarComponent = MenuBarComponent;
exampleAppModule_1.appModule.component(MenuBarComponent.Name, new MenuBarComponent());
//# sourceMappingURL=menu-bar.component.js.map