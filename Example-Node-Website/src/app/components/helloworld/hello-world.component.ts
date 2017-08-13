import * as angular from 'angular';
import {WebClient} from 'exampleAppModule';

export class HelloWorldComponent implements angular.IComponentOptions {
    static Name:string = 'helloWorld';
    controller:angular.Injectable<angular.IControllerConstructor> = HelloWorldController;
    template:string = require('./hello-world.component.html');
    //transclude:boolean = false;
}
export class HelloWorldController implements angular.IController {
    static $inject: Array<string> = ['$log'];
    static Name = 'HelloWorldController';

    public echo: string;
    public imgClass: string;

    constructor(private $log:angular.ILogService) {
        $log.info('HelloWorld Constructor Called');
    }
    $onInit(): void {
        this.imgClass = 'defaultImg';
        this.$log.info('HelloWorld Controller onInit has been called');
        this.echo = 'world';
        console.log(this);
    }
}

WebClient.appModule
    .controller(HelloWorldController.Name, HelloWorldComponent)
    .component(HelloWorldComponent.Name, new HelloWorldComponent());

