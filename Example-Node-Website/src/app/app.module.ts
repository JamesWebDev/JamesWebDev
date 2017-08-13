import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
export module WebClient {
  export const Name = 'exampleapp';
  angular.module(WebClient.Name, [
    'ui.router',
    'ngMaterial'])
    .run(['$rootScope','$state',
    ($rootScope,$state)=>{
      console.log('app initialized')
       $rootScope.$on("$stateChangeError", console.log.bind(console));
      $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
        if (fromState.name === "") {       
            console.log("initial state: " + toState.name);
        }else{
            console.log("toState: " + toState.name+", fromState: "+fromState.name);
        }
      }); 
    }]);
  export const appModule = angular.module(WebClient.Name)
}

