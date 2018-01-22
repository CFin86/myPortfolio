var app = angular.module("app", ["ui.router", "ngResource", "app.services", "app.factories"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    "use strict";
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'apps/ShiptHub/app/components/core/header/navbarView.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'apps/ShiptHub/app/components/home/homeView.html',
                    controller: 'HomeController'
                },
                'profileCard@home': {
                    templateUrl: 'apps/ShiptHub/app/components/core/profiles/profileCard.html',
                    controller: 'ProfileController'
                },
                'mobileCard@home': {
                    templateUrl: 'apps/ShiptHub/app/components/core/profiles/mobileCard.html',
                    controller: 'ProfileController'
                },
                'footer': {
                    templateUrl: 'apps/ShiptHub/app/components/core/footer/footerView.html',
                    controller: 'FooterController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});