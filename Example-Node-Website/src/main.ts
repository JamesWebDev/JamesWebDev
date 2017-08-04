import * as angular from 'angular';
import 'angular-ui-router';
import 'exampleAppModule';
import './app/app.routes';

angular.element(document).ready(() => {
   angular.bootstrap(document, ['exampleapp']);
   angular.element(document.querySelector('html')).addClass('ng-app: exampleapp');
   console.log('bootstrapped html in main.ts');
});
