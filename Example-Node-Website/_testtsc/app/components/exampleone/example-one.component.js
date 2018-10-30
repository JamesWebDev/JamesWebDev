import { WebClient } from 'exampleAppModule';
var ExampleOne = /** @class */ (function () {
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
export { ExampleOne };
var ExampleOneComponent = /** @class */ (function () {
    function ExampleOneComponent() {
        this.controller = ExampleOne;
        this.template = require('./example-one.component.html');
        this.transclude = false;
    }
    ExampleOneComponent.Name = 'exampleOne';
    return ExampleOneComponent;
}());
export { ExampleOneComponent };
WebClient.appModule.component(ExampleOneComponent.Name, new ExampleOneComponent());
//# sourceMappingURL=example-one.component.js.map