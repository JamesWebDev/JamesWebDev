import * as angular from 'angular';
import {appModule} from 'exampleAppModule';


export class ExampleOne implements angular.IController {
    static $inject: Array<string> = ['$log'];
    static Name = 'ExampleOneController';

    public echo: string;
    public imgClass: string;

    constructor(private $log:angular.ILogService) {
        $log.info('ExampleOne Constructor Called');
    }
    $onInit(): void {
        this.imgClass = 'defaultImg';
        this.$log.info('ExampleOne Controller onInit has been called');
        this.echo = 'Im at ExampleOne';
        console.log(this);
    }
}
export class ExampleOneComponent implements angular.IComponentOptions {
    static Name:string = 'exampleOne';    
    controller:angular.Injectable<angular.IControllerConstructor> = ExampleOne;
    template:string = require('./example-one.component.html');
    transclude:boolean = false;
}

appModule.component(ExampleOneComponent.Name, new ExampleOneComponent());