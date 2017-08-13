"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("@uirouter/angularjs");
require("angular-animate");
require("angular-aria");
require("angular-material");
exports.appModule = angular.module('exampleapp', ['ui.router', 'ngMaterial']).run(function ($rootScope, $state) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        if (fromState.name === "") {
            console.log("initial state: " + toState.name);
        }
        else {
            console.log("toState: " + toState.name + ", fromState: " + fromState.name);
        }
    });
});
//# sourceMappingURL=app.module.js.map