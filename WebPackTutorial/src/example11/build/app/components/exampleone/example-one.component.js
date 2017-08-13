"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exampleAppModule_1 = require("exampleAppModule");
var ExampleOne = (function () {
    function ExampleOne($log) {
        this.$log = $log;
        $log.info('ExampleOne Constructor Called');
    }
    ExampleOne.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('ExampleOne Controller onInit has been called');
        this.echo = 'Im at ExampleOne';
        console.log(this);
    };
    ExampleOne.$inject = ['$log'];
    ExampleOne.Name = 'ExampleOneController';
    return ExampleOne;
}());
exports.ExampleOne = ExampleOne;
var ExampleOneComponent = (function () {
    function ExampleOneComponent() {
        this.controller = ExampleOne;
        this.template = require('./example-one.component.html');
        this.transclude = false;
    }
    ExampleOneComponent.Name = 'exampleOne';
    return ExampleOneComponent;
}());
exports.ExampleOneComponent = ExampleOneComponent;
exampleAppModule_1.appModule.component(ExampleOneComponent.Name, new ExampleOneComponent());
//# sourceMappingURL=example-one.component.js.map