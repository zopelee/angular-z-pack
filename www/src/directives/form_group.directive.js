angular.module('zDirectiveLib').directive('formGroup', function () {
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
      $scope.onFileSelected2 = function ($flow) {
        $scope.onFileSelected()($flow)
      }
      $scope.onFileUploaded2 = function ($file, $message, $flow) {
        $scope.onFileUploaded()($file, $message, $flow)
      }
    }
  }
})