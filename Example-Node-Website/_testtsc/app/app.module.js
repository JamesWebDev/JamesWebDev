import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import '@jameswebdev/example-ng-module';
export var WebClient;
(function (WebClient) {
    WebClient.Name = 'exampleapp';
    angular.module(WebClient.Name, [
        'ui.router',
        'ngMaterial',
        'example-test-module'
    ])
        .run(['$rootScope', '$state',
        function ($rootScope, $state) {
            console.log('app initialized');
            $rootScope.$on("$stateChangeError", console.log.bind(console));
            $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
                if (fromState.name === "") {
                    console.log("initial state: " + toState.name);
                }
                else {
                    console.log("toState: " + toState.name + ", fromState: " + fromState.name);
                }
            });
        }]);
    WebClient.appModule = angular.module(WebClient.Name);
})(WebClient || (WebClient = {}));
//# sourceMappingURL=app.module.js.map