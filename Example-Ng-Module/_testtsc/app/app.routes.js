"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exampleAppModule_1 = require("exampleAppModule");
var AppRoutes = (function () {
    function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('app', {
            url: '',
            abstract: true,
            views: {
                app: {
                    template: require('./app.layout.html'),
                },
            }
        })
            .state('app.home', {
            name: 'home',
            url: '/home',
            component: 'home'
        });
        /*.state('app.exampleone', {
            url: '/exampleone',
            views: {
                content : {
                    template: require('./contacts/contacts.html'),
                },
            },
        })
        .state('app.exampletwo', {
            url: '/exampletwo',
            views: {
                content : {
                    template: require('./patients/patients.html'),
                },
            },
        });*/
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
    return AppRoutes;
}());
AppRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
];
exports.AppRoutes = AppRoutes;
exampleAppModule_1.appModule.config(AppRoutes);
//# sourceMappingURL=app.routes.js.map