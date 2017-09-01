import * as angular from 'angular';
export module TestModule {
    export const Name = "example-test-module";
    angular.module(TestModule.Name, [])
        .run(['$rootScope','$state',
        ($rootScope,$state)=>{
        console.log('example-test-module initialized')
        }]);
    export const appModule = angular.module(TestModule.Name)
}