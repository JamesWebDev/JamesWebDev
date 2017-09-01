import * as angular from 'angular';
import {TestModule} from './test.module';
import './test.template.html';

export class TestOneComponent implements angular.IComponentOptions {
    static Name:string = 'testOne';    
    controller:angular.Injectable<angular.IControllerConstructor> = TestOne;
    templateUrl:string = 'Example-Ng-Module/src/test.template.html';
    transclude:boolean = false;
}
export class TestOne implements angular.IController {
    static $inject: Array<string> = ['$log'];
    static Name = 'TestOneController';

    public echo: string;
    public imgClass: string;

    constructor(private $log:angular.ILogService) {
        $log.info('TestOne Constructor Called');
    }
    $onInit(): void {
        this.imgClass = 'defaultImg';
        this.$log.info('TestOne Controller onInit has been called');
        this.echo = 'Im at TestOne';
        console.log(this);
    }
}

TestModule.appModule.component(TestOneComponent.Name, new TestOneComponent());