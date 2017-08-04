"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("exampleAppModule");
require("app/app.routes");
angular.element(document).ready(function () {
    angular.bootstrap(document, ['exampleapp']);
    angular.element(document.querySelector('html')).addClass('ng-app: exampleapp');
    console.log('bootstrapped html in main.ts');
});
//# sourceMappingURL=main.js.map