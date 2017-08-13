/// <reference types="angular" />
import * as angular from 'angular';
export declare class MenuBarController implements angular.IController {
    private $log;
    static $inject: Array<string>;
    static Name: string;
    echo: string;
    imgClass: string;
    constructor($log: angular.ILogService);
    $onInit(): void;
}
export declare class MenuBarComponent implements angular.IComponentOptions {
    static Name: string;
    controller: angular.Injectable<angular.IControllerConstructor>;
    template: string;
    transclude: boolean;
}
