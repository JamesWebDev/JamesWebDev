/*import 'angular';
import 'lodash';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';*/

import * as angular from 'angular';


export class ToastDirective implements angular.IController {
    static componentName = "psToastDirective";
    static $inject = [
        '$mdToast'
    ];
    public static directive:angular.IDirectiveFactory = () =>{
        return ()=>{
            console.log('1')
            return {
                restrict: 'E',
                replace: true,
                template: require("./toast.directive.html"),
                controller: ToastDirective,
                controllerAs: 'ctrl',
                scope: {}            
            };
        }
    }    
    private last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    toastPosition = angular.extend({},this.last);

    constructor(private $mdToast:angular.material.IToastService) {          
        console.log(2);
        console.log(_.concat([1], [2]));
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

angular.module('MyApp', ['ngMaterial','ngMessages'])
    .directive('psToastDirective',function () {
        return {
            restrict: 'A',
            replace: true,
            template: require("./toast.directive.html"),
            controller: ToastDirective,
            controllerAs: 'ctrl',
            scope: {}            
        };
    })
