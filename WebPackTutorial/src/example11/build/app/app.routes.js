"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@uirouter/angularjs");
var exampleAppModule_1 = require("exampleAppModule");
var home = require("./components/home/home.component");
var exampleone = require("./components/exampleone/example-one.component");
var exampletwo = require("./components/exampletwo/example-two.component");
var AppRoutes = (function () {
    function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log('AppRoutes Constructor Called');
        $stateProvider
            .state('app', {
            url: '',
            abstract: true,
            views: {
                content: {
                    template: require('./app.layout.html'),
                },
            }
        })
            .state('app.home', {
            name: home.HomeComponent.Name,
            url: '/home',
            component: home.HomeComponent.Name,
            views: {
                content: {
                    template: require('./components/home/home.view.html')
                }
            }
        })
            .state('app.exampleone', {
            name: exampleone.ExampleOneComponent.Name,
            url: '/exampleone',
            component: exampleone.ExampleOneComponent.Name,
            views: {
                content: {
                    template: require('./components/exampleone/example-one.view.html')
                }
            }
        })
            .state('app.exampletwo', {
            name: exampletwo.ExampleTwo.Name,
            url: '/exampletwo',
            component: exampletwo.ExampleTwo.Name,
            views: {
                content: {
                    template: require('./components/exampletwo/example-two.view.html')
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
    AppRoutes.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];
    return AppRoutes;
}());
exports.AppRoutes = AppRoutes;
exampleAppModule_1.appModule.config(AppRoutes);
//# sourceMappingURL=app.routes.js.map