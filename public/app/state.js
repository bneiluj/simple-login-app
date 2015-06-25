angular
    .module('app.state', [])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function (
            $stateProvider,
            $urlRouterProvider
        ) {
            'use strict';

            /**
             * For any unmatched url, redirect to '/'
             */
            $urlRouterProvider.otherwise('/');

            /**
             * Define base
             */
            $stateProvider.state('base', {
                abstract: true;
            });
        }]);
