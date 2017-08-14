import { WebClient } from 'exampleAppModule';
export class HelloWorldComponent {
    constructor() {
        this.controller = HelloWorldController;
        this.template = require('./hello-world.component.html');
    }
}
HelloWorldComponent.Name = 'helloWorld';
export class HelloWorldController {
    constructor($log) {
        this.$log = $log;
        $log.info('HelloWorld Constructor Called');
    }
    $onInit() {
        this.imgClass = 'defaultImg';
        this.$log.info('HelloWorld Controller onInit has been called');
        this.echo = 'world';
        console.log(this);
    }
}
HelloWorldController.$inject = ['$log'];
HelloWorldController.Name = 'HelloWorldController';
WebClient.appModule
    .controller(HelloWorldController.Name, HelloWorldComponent)
    .component(HelloWorldComponent.Name, new HelloWorldComponent());
//# sourceMappingURL=hello-world.component.js.map