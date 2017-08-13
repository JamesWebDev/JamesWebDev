"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exampleAppModule_1 = require("exampleAppModule");
var ExampleTwoComponent = (function () {
    function ExampleTwoComponent() {
        this.controller = ExampleTwo;
        this.template = require('./example-Two.component.html');
        this.transclude = false;
    }
    ExampleTwoComponent.Name = 'exampleTwo';
    return ExampleTwoComponent;
}());
exports.ExampleTwoComponent = ExampleTwoComponent;
var ExampleTwo = (function () {
    function ExampleTwo($log) {
        this.$log = $log;
        $log.info('ExampleTwo Constructor Called');
    }
    ExampleTwo.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('ExampleTwo Controller onInit has been called');
        this.echo = 'Im at ExampleTwo';
        console.log(this);
    };
    ExampleTwo.$inject = ['$log'];
    ExampleTwo.Name = 'ExampleTwoController';
    return ExampleTwo;
}());
exports.ExampleTwo = ExampleTwo;
exampleAppModule_1.appModule.component(ExampleTwoComponent.Name, new ExampleTwoComponent());
//# sourceMappingURL=example-two.component.js.map