/// <reference types="angular" />
import * as angular from 'angular';
import './test.template.html';
export declare class TestOneComponent implements angular.IComponentOptions {
    static Name: string;
    controller: angular.Injectable<angular.IControllerConstructor>;
    templateUrl: string;
    transclude: boolean;
}
export declare class TestOne implements angular.IController {
    private $log;
    static $inject: Array<string>;
    static Name: string;
    echo: string;
    imgClass: string;
    constructor($log: angular.ILogService);
    $onInit(): void;
}
