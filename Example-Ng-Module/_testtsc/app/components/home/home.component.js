"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exampleAppModule_1 = require("exampleAppModule");
var HomeController = (function () {
    function HomeController($log) {
        this.$log = $log;
        $log.info('HomeController Constructor Called');
    }
    HomeController.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('HomeController Controller onInit has been called');
        this.echo = 'Im Home';
        console.log(this);
    };
    return HomeController;
}());
HomeController.$inject = ['$log'];
HomeController.Name = 'HomeController';
exports.HomeController = HomeController;
var HomeComponent = (function () {
    function HomeComponent() {
        this.controller = HomeController;
        this.template = require('./home.component.html');
        this.transclude = false;
    }
    return HomeComponent;
}());
HomeComponent.Name = 'Home';
exports.HomeComponent = HomeComponent;
exampleAppModule_1.appModule
    .controller(HomeController.Name, HomeController)
    .component(HomeComponent.Name, new HomeComponent());
//# sourceMappingURL=home.component.js.map