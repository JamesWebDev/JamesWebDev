import { WebClient } from 'exampleAppModule';
export class HomeComponent {
    constructor() {
        this.controller = HomeController;
        this.template = require('./home.component.html');
        this.transclude = false;
    }
}
HomeComponent.Name = 'home';
export class HomeController {
    constructor($log) {
        this.$log = $log;
        $log.info('HomeController Constructor Called');
    }
    $onInit() {
        this.imgClass = 'defaultImg';
        this.$log.info('HomeController Controller onInit has been called');
        this.echo = 'Im Home';
        console.log(this);
    }
}
HomeController.$inject = ['$log'];
HomeController.Name = 'HomeController';
WebClient.appModule.component(HomeComponent.Name, new HomeComponent());
//# sourceMappingURL=home.component.js.map