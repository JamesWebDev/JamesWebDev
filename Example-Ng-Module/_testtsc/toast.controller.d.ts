/// <reference types="angular-material" />
import * as angular from 'angular';
export declare class ToastModuleController implements angular.IController {
    private $mdToast;
    static $inject: Array<string>;
    static Name: string;
    private last;
    toastPosition: any;
    constructor($mdToast: angular.material.IToastService);
    getToastPosition: () => string;
    sanitizePosition: () => void;
    showSimpleToast: () => void;
    showActionToast: () => void;
}
