import * as angular from 'angular';
export declare class ExampleOne implements angular.IController {
    private $log;
    static $inject: Array<string>;
    static Name: string;
    echo: string;
    imgClass: string;
    constructor($log: angular.ILogService);
    $onInit(): void;
}
export declare class ExampleOneComponent implements angular.IComponentOptions {
    static Name: string;
    controller: angular.Injectable<angular.IControllerConstructor>;
    template: string;
    transclude: boolean;
}
