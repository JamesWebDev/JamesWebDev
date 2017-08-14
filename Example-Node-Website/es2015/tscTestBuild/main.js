import * as angular from 'angular';
import 'angular-ui-router';
import * as main from 'exampleAppModule';
import './app/app.routes';
angular.element(document).ready(() => {
    console.log('bootstrapped html in main.ts');
    angular.bootstrap(document.getElementsByTagName('html')[0], [main.WebClient.Name]);
});
//# sourceMappingURL=main.js.map