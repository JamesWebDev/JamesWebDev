import { WebClient } from 'exampleAppModule';
export class ExampleOne {
    constructor($log) {
        this.$log = $log;
        $log.info('ExampleOne Constructor Called');
    }
    $onInit() {
        this.imgClass = 'defaultImg';
        this.$log.info('ExampleOne Controller onInit has been called');
        this.echo = 'Im at ExampleOne';
        console.log(this);
    }
}
ExampleOne.$inject = ['$log'];
ExampleOne.Name = 'ExampleOneController';
export class ExampleOneComponent {
    constructor() {
        this.controller = ExampleOne;
        this.template = require('./example-one.component.html');
        this.transclude = false;
    }
}
ExampleOneComponent.Name = 'exampleOne';
WebClient.appModule.component(ExampleOneComponent.Name, new ExampleOneComponent());
//# sourceMappingURL=example-one.component.js.map