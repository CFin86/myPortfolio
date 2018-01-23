app.controller("NavbarController", ['SEOService', '$location', function (SEOService, $location) {
    "use strict";
    SEOService.setSEO({
        title: 'ShiptHub',
        image: '/myPortfolio/assets/img/logo.png',
        url: $location.url(),
        description: 'An Incredible Github Search Service'
    });
}]);