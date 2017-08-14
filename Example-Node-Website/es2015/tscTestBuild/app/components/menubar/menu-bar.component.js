import { WebClient } from 'exampleAppModule';
export class MenuBarComponent {
    constructor() {
        this.controller = MenuBarController;
        this.template = require('./menu-bar.component.html');
        this.transclude = false;
    }
}
MenuBarComponent.Name = 'menuBar';
export class MenuBarController {
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
MenuBarController.$inject = ['$log'];
MenuBarController.Name = 'MenuBarComponent';
WebClient.appModule.component(MenuBarComponent.Name, new MenuBarComponent());
//# sourceMappingURL=menu-bar.component.js.map