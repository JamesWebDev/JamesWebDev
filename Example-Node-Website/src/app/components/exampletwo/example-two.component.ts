import * as angular from 'angular';
import {WebClient} from 'exampleAppModule';

export class ExampleTwoComponent implements angular.IComponentOptions {
    static Name:string = 'exampleTwo';    
    controller:angular.Injectable<angular.IControllerConstructor> = ExampleTwo;
    template:string = require('./example-Two.component.html');
    transclude:boolean = false;
}
export class ExampleTwo implements angular.IController {
    static $inject: Array<string> = ['$log'];
    static Name = 'ExampleTwoController';

    public echo: string;
    public imgClass: string;

    constructor(private $log:angular.ILogService) {
        $log.info('ExampleTwo Constructor Called');
    }
    $onInit(): void {
        this.imgClass = 'defaultImg';
        this.$log.info('ExampleTwo Controller onInit has been called');
        this.echo = 'Im at ExampleTwo';
        console.log(this);
    }
}

WebClient.appModule.component(ExampleTwoComponent.Name, new ExampleTwoComponent());