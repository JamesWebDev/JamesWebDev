import * as angular from 'angular';
import 'angular-ui-router';
import * as main from 'exampleAppModule';
import './app/app.routes';
import get from 'lodash/get'
//import _ from 'lodash';

angular.element(document).ready(() => {
   console.log('bootstrapped html in main.ts');
   angular.bootstrap(document.getElementsByTagName('html')[0], [main.WebClient.Name]);
   //angular.bootstrap(document, ['exampleapp']);
   //angular.element(document.querySelector('html')).addClass('ng-app: exampleapp');
   
});

var object = { 'a': [{ 'b': { 'c': 'lodash sub-path import worked if you see this message' } }] };
console.log(get(object, 'a[0].b.c'));
//console.log(_.get(object, 'a[0].b.c'));


