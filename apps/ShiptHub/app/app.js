var app = angular.module("app", ["ui.router", "ngResource", "app.services", "app.factories"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    "use strict";
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'myPortfolio/apps/ShiptHub/app/components/core/header/navbarView.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'myPortfolio/apps/ShiptHub/app/components/home/homeView.html',
                    controller: 'HomeController'
                },
                'profileCard@home': {
                    templateUrl: 'myPortfolio/apps/ShiptHub/app/components/core/profiles/profileCard.html',
                    controller: 'ProfileController'
                },
                'mobileCard@home': {
                    templateUrl: 'myPortfolio/apps/ShiptHub/app/components/core/profiles/mobileCard.html',
                    controller: 'ProfileController'
                },
                'footer': {
                    templateUrl: 'myPortfolio/apps/ShiptHub/app/components/core/footer/footerView.html',
                    controller: 'FooterController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});