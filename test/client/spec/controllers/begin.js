'use strict';

describe('Controller: BeginCtrl', function () {

  // load the controller's module
  beforeEach(module('trainingApp'));

  var BeginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {

    scope = $rootScope.$new();
    BeginCtrl = $controller('BeginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {


  });
});
