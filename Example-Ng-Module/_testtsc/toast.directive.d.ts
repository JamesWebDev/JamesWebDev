/// <reference types="angular" />
/// <reference types="angular-material" />
import * as angular from 'angular';
export declare class ToastDirective implements angular.IController {
    private $mdToast;
    static componentName: string;
    static $inject: string[];
    static directive: angular.IDirectiveFactory;
    private last;
    toastPosition: any;
    constructor($mdToast: angular.material.IToastService);
    getToastPosition: () => string;
    sanitizePosition: () => void;
    showSimpleToast: () => void;
    showActionToast: () => void;
}
