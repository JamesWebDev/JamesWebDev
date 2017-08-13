import * as angular from 'angular';
import {WebClient} from 'exampleAppModule';


export class HomeController implements angular.IController {
    static $inject: Array<string> = ['$log'];
    static Name = 'HomeController';

    public echo: string;
    public imgClass: string;

    constructor(private $log:angular.ILogService) {
        $log.info('HomeController Constructor Called');
    }
    $onInit(): void {
        this.imgClass = 'defaultImg';
        this.$log.info('HomeController Controller onInit has been called');
        this.echo = 'Im Home';
        console.log(this);
    }
}
export class HomeComponent implements angular.IComponentOptions {
    static Name:string = 'home';    
    controller:angular.Injectable<angular.IControllerConstructor> = HomeController;
    template:string = require('./home.component.html');
    transclude:boolean = false;
}

WebClient.appModule.component(HomeComponent.Name, new HomeComponent());