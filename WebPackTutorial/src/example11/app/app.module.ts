import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
export const appModule = angular.module('exampleapp', ['ui.router','ngMaterial']).run(function($rootScope,$state) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
    if (fromState.name === "") {       
        console.log("initial state: " + toState.name);
    }else{
        console.log("toState: " + toState.name+", fromState: "+fromState.name);
    }
  });
});
