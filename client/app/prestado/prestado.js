'use strict';

angular.module('bibliotecaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('prestado', {
        url: '/prestado',
        templateUrl: 'app/prestado/prestado.html',
        controller: 'PrestadoCtrl'
      });
  });