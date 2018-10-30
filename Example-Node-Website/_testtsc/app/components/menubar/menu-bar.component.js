import { WebClient } from 'exampleAppModule';
var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent() {
        this.controller = MenuBarController;
        this.template = require('./menu-bar.component.html');
        this.transclude = false;
    }
    MenuBarComponent.Name = 'menuBar';
    return MenuBarComponent;
}());
export { MenuBarComponent };
var MenuBarController = /** @class */ (function () {
    function MenuBarController($log) {
        this.$log = $log;
        $log.info('HomeController Constructor Called');
    }
    MenuBarController.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('HomeController Controller onInit has been called');
        this.echo = 'Im Home';
        console.log(this);
    };
    MenuBarController.$inject = ['$log'];
    MenuBarController.Name = 'MenuBarComponent';
    return MenuBarController;
}());
export { MenuBarController };
WebClient.appModule.component(MenuBarComponent.Name, new MenuBarComponent());
//# sourceMappingURL=menu-bar.component.js.map