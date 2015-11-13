angular.module('zDirectiveLib').directive('formGroup', ['ngFileUpload', function () {
  return {
    restrict: 'AE',
    templateUrl: function (tElement, tAttrs) {
      return tAttrs.templateUrl || 'bower_components/angular-z-pack/dist/directives/form_group.directive.html'
    },
    scope: {
      inputname: '=',
      input: '=',
      model: '=',
      errors: '=',
      onFileSelected: '&',
      onFileUploaded: '&'
    },
    controller: function ($scope, $element, $attrs) {
//      $scope.val
//      $scope.model

      $scope.onFileSelected2 = function ($flow, options) {
        $scope.onFileSelected()($flow, options)
      }
      $scope.onFileUploaded2 = function ($file, $message, $flow, options) {
        $scope.onFileUploaded()($file, $message, $flow, options)
      }

//       observe changes in attribute - could also be scope.$watch
//      $scope.$watch('model', function (value) {
////        console.log($scope)
////        console.log($element)
////        console.log($attrs)
//        if (value) {
////          console.log(value)
//          // pass value to app controller
//          $scope.model = value
//          $scope.val = ($scope.model[$scope.input.column || $scope.inputname]) || $scope.input.default
//        }
//      })
    }
  }
}])