'use strict';

describe('Controller: PrestadoCtrl', function () {

  // load the controller's module
  beforeEach(module('bibliotecaApp'));

  var PrestadoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrestadoCtrl = $controller('PrestadoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
