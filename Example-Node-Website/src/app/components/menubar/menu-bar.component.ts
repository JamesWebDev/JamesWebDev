import * as angular from 'angular';
import {WebClient} from 'exampleAppModule';


export class MenuBarController implements angular.IController {
    static $inject: Array<string> = ['$log'];
    static Name = 'MenuBarComponent';

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
export class MenuBarComponent implements angular.IComponentOptions {
    static Name:string = 'menuBar';    
    controller:angular.Injectable<angular.IControllerConstructor> = MenuBarController;
    template:string = require('./menu-bar.component.html');
    transclude:boolean = false;
}

WebClient.appModule.component(MenuBarComponent.Name, new MenuBarComponent());