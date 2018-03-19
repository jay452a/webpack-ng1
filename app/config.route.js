'use strict';
module.exports = routeConfig ;


function routeConfig($stateProvider, $urlRouterProvider) {

    var routes, setRoutes;

    routes = [ {
            name: 'passwordSet',
            ctrl: 'passwordSetCtrl',
            url: 'passwordSet',
            tpl: './modules/business/main/passwordSet'
        },
        {
            name: 'resetLoginPassword',
            ctrl: 'resetLoginPasswordCtrl',
            url: 'resetLoginPassword',
            tpl: './modules/business/main/resetLoginPassword'
        },
        {
            name: 'validateOldPassword',
            ctrl: 'validateOldPasswordCtrl',
            url: 'validateOldPassword',
            tpl: './modules/business/main/validateOldpayPassword'
        },
    ];
    setRoutes = function (route) {

        var config, name;
        config = {
            url: "/" + route.url,
            template: require(route.tpl + '.html'),
            controller: route.ctrl
        };
        $stateProvider.state(route.name, config);
        return $stateProvider;
    };
    routes.forEach(function (route) {
        return setRoutes(route);
    });

}

