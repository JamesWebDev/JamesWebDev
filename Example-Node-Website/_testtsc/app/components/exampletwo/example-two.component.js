import { WebClient } from 'exampleAppModule';
var ExampleTwoComponent = /** @class */ (function () {
    function ExampleTwoComponent() {
        this.controller = ExampleTwo;
        this.template = require('./example-Two.component.html');
        this.transclude = false;
    }
    ExampleTwoComponent.Name = 'exampleTwo';
    return ExampleTwoComponent;
}());
export { ExampleTwoComponent };
var ExampleTwo = /** @class */ (function () {
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
export { ExampleTwo };
WebClient.appModule.component(ExampleTwoComponent.Name, new ExampleTwoComponent());
//# sourceMappingURL=example-two.component.js.map