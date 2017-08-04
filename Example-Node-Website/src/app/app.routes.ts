import * as angular from "angular";
import 'angular-ui-router';
import {appModule} from "exampleAppModule"
import * as home from './components/home/home.component';
import * as exampleone from './components/exampleone/example-one.component';
import * as exampletwo from './components/exampletwo/example-two.component';
export class AppRoutes {
    static $inject: string[] = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];
    constructor($stateProvider: angular.ui.IStateProvider,
                $urlRouterProvider: angular.ui.IUrlRouterProvider,
                $locationProvider: angular.ILocationProvider
    ) {
        console.log('AppRoutes Constructor Called')
        
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                views: {
                    content : {
                        template: require('./app.layout.html'),
                    },
                }
            })
            .state('app.home', {
                name:home.HomeComponent.Name,
                url: '/home',
                component:home.HomeComponent.Name,
                views:{
                    content:{
                        template:require('./components/home/home.view.html')
                    }
                }
            })
            .state('app.exampleone', {
                name:exampleone.ExampleOneComponent.Name,
                url: '/exampleone',
                component:exampleone.ExampleOneComponent.Name,
                views:{
                    content:{
                        template:require('./components/exampleone/example-one.view.html')
                    }
                }
            })
            .state('app.exampletwo', {
                name:exampletwo.ExampleTwo.Name,
                url: '/exampletwo',
                component:exampletwo.ExampleTwo.Name,
                views:{
                    content:{
                        template:require('./components/exampletwo/example-two.view.html')
                    }
                }
            });   
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
}
appModule.config(AppRoutes);