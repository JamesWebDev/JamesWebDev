import { WebClient } from 'exampleAppModule';
var HomeComponent = (function () {
    function HomeComponent() {
        this.controller = HomeController;
        this.template = require('./home.component.html');
        this.transclude = false;
    }
    HomeComponent.Name = 'home';
    return HomeComponent;
}());
export { HomeComponent };
var HomeController = (function () {
    function HomeController($log) {
        this.$log = $log;
        $log.info('HomeController Constructor Called');
    }
    HomeController.prototype.$onInit = function () {
        this.imgClass = 'defaultImg';
        this.$log.info('HomeController Controller onInit has been called');
        this.echo = 'Im Home';
        console.log(this);
    };
    HomeController.$inject = ['$log'];
    HomeController.Name = 'HomeController';
    return HomeController;
}());
export { HomeController };
WebClient.appModule.component(HomeComponent.Name, new HomeComponent());
//# sourceMappingURL=home.component.js.map