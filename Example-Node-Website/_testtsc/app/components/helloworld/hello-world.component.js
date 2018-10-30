import { WebClient } from 'exampleAppModule';
var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
        this.controller = HelloWorldController;
        this.template = require('./hello-world.component.html');
        //transclude:boolean = false;
    }
    HelloWorldComponent.Name = 'helloWorld';
    return HelloWorldComponent;
}());
export { HelloWorldComponent };
var HelloWorldController = /** @class */ (function () {
    function HelloWorldController($log) {
        this.$log = $log;
        $log.info('HelloWorld Constructor Called');
    }
    HelloWorldController.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('HelloWorld Controller onInit has been called');
        this.echo = 'world';
        console.log(this);
    };
    HelloWorldController.$inject = ['$log'];
    HelloWorldController.Name = 'HelloWorldController';
    return HelloWorldController;
}());
export { HelloWorldController };
WebClient.appModule
    .controller(HelloWorldController.Name, HelloWorldComponent)
    .component(HelloWorldComponent.Name, new HelloWorldComponent());
//# sourceMappingURL=hello-world.component.js.map