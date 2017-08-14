import 'angular-ui-router';
import { WebClient } from "exampleAppModule";
import * as home from './components/home/home.component';
import * as exampleone from './components/exampleone/example-one.component';
import * as exampletwo from './components/exampletwo/example-two.component';
import * as helloworld from './components/helloworld/hello-world.component';
export class AppRoutes {
    constructor($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log('AppRoutes Constructor Called');
        $stateProvider
            .state('app', {
            url: '',
            abstract: true,
            views: {
                shell: {
                    template: require('./app.layout.html'),
                },
            }
        })
            .state('app.home', {
            name: home.HomeComponent.Name,
            url: '/home',
            views: {
                app: {
                    component: home.HomeComponent.Name
                },
            }
        })
            .state('app.helloworld', {
            name: helloworld.HelloWorldComponent.Name,
            url: '/helloworld',
            views: {
                app: {
                    component: helloworld.HelloWorldComponent.Name
                },
            }
        })
            .state('app.exampleone', {
            name: exampleone.ExampleOneComponent.Name,
            url: '/exampleone',
            views: {
                app: {
                    component: exampleone.ExampleOneComponent.Name
                },
            }
        })
            .state('app.exampletwo', {
            name: exampletwo.ExampleTwoComponent.Name,
            url: '/exampletwo',
            views: {
                app: {
                    component: exampletwo.ExampleTwoComponent.Name
                },
            }
        });
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
}
AppRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
];
WebClient.appModule.config(AppRoutes);
//# sourceMappingURL=app.routes.js.map