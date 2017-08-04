import * as angular from 'angular';
import {toastModule} from './toast.module'

export class ToastModuleController implements angular.IController {
    static $inject: Array<string> = ['$mdToast'];
    static Name = 'AppCtrl';

    private last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    toastPosition = angular.extend({},this.last);

    constructor(private $mdToast:angular.material.IToastService) {
        
    }
    getToastPosition =()=> {
        this.sanitizePosition();
        return Object.keys(this.toastPosition)
        .filter((pos)=> { return this.toastPosition[pos]; })
        .join(' ');
    };
    sanitizePosition=()=> {
        var current = this.toastPosition;

        if ( current.bottom && this.last.top ) current.top = false;
        if ( current.top && this.last.bottom ) current.bottom = false;
        if ( current.right && this.last.left ) current.left = false;
        if ( current.left && this.last.right ) current.right = false;

        this.last = angular.extend({},current);
    }
    showSimpleToast=()=> {
        var pinTo = this.getToastPosition();

        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent('Simple Toast!')
                .position(pinTo )
                .hideDelay(3000)
        );
    };
    showActionToast=()=> {
        var pinTo = this.getToastPosition();
        var toast = this.$mdToast.simple()
            .textContent('Marked as read')
            .action('UNDO')
            .highlightAction(true)
            .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
            .position(pinTo);

        this.$mdToast.show(toast).then((response)=> {
            if ( response == 'ok' ) {
                alert('You clicked the \'UNDO\' action.');
            }
        }).catch((ex)=>{console.log(ex)});
    };    
}
toastModule.controller(ToastModuleController.Name, ToastModuleController);

/*export class ToastController implements angular.IController {
    static $inject: Array<string> = ['$mdToast'];
    static Name = 'ToastCtrl';
    constructor(private $mdToast:angular.material.IToastService) {}
    closeToast() {
        this.$mdToast.hide();
    };
}
toastModule.controller(ToastController.Name, ToastController);*/