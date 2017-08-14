import { WebClient } from 'exampleAppModule';
export class ExampleTwoComponent {
    constructor() {
        this.controller = ExampleTwo;
        this.template = require('./example-Two.component.html');
        this.transclude = false;
    }
}
ExampleTwoComponent.Name = 'exampleTwo';
export class ExampleTwo {
    constructor($log) {
        this.$log = $log;
        $log.info('ExampleTwo Constructor Called');
    }
    $onInit() {
        this.imgClass = 'defaultImg';
        this.$log.info('ExampleTwo Controller onInit has been called');
        this.echo = 'Im at ExampleTwo';
        console.log(this);
    }
}
ExampleTwo.$inject = ['$log'];
ExampleTwo.Name = 'ExampleTwoController';
WebClient.appModule.component(ExampleTwoComponent.Name, new ExampleTwoComponent());
//# sourceMappingURL=example-two.component.js.map