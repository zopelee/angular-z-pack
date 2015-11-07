angular.module('zCommonLib').directive('formGroup', function formGroup() {
  return {
    restrict: 'AE',
    templateUrl: function (tElement, tAttrs) {
      return tAttrs.templateUrl || 'bower_components/angular-z-pack/dist/directives/form_group.directive.html'
    },
    scope: {
      inputname: '=',
      input: '=',
      model: '=',
      errors: '='
    },
    controller: function ($scope, $element, $attrs) {
      // observe changes in attribute - could also be scope.$watch
//      $attrs.$observe('formGroup', function (value) {
//        if (value) {
//          console.log(value);
//          // pass value to app controller
//          $scope.variable = value;
//        }
//      });
    }
  }
})
