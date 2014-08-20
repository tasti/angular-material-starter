'use strict';

App.directive('myDirective', [
    function() {
        var directive = {};
        
        return directive;
    }
]);

/* Form */
App.directive('ig', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      fid: '@'
    },
    template: 
      '<material-input-group>' +
        '<label for="{{fid}}">Description</label>' +
        '<input id="{{fid}}" type="text" ng-model="data.description">' +
      '</material-input-group>'
  };
});
