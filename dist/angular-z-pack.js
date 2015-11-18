angular.module('zCommonLib', ['cgBusy']);

angular.module('zCommonLib').config(function ($httpProvider) {
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
});

angular.module('zCommonLib').run(function ($rootScope, $window) {
  $rootScope.$on('$routeChangeSuccess', function (evt, absNewUrl, absOldUrl) {
    $window.scrollTo(0, 0); //scroll to top of page after each route change
  });
});
angular.module('zDirectiveLib', ['ngFileUpload'])
angular.module('zFilterLib', []);

angular.module('zFilterLib').filter('dateFormat', function ($filter) {
  return function (input, format) {
    var str
    try {
      str = $filter('date')(new Date(input), format)
    } catch (err) {
      str = ''
    }
    return str
  };
});

angular.module('zFilterLib').filter('range', function () {
  return function (input, total) {
    total = parseInt(total);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }
    return input;
  };
});
angular.module('zI18nLib', ['ngRoute', 'pascalprecht.translate', 'ngCookies', 'ngSanitize']);

angular.module('zI18nLib').config(function ($translateProvider, $translatePartialLoaderProvider) {
  $translatePartialLoaderProvider.addPart('general');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: 'i18n/{part}/{lang}.json'
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
});

angular.module('zI18nLib').run(function ($rootScope, $routeParams, $translate, $cookies) {
  $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
    $translate.refresh();
  });
  $rootScope.$on('$routeChangeSuccess', function (evt, absNewUrl, absOldUrl) {
    var locale = $routeParams.lang;
    if (locale) {
      $cookies.putObject('locale', locale);
    }
    $translate.use(locale || $cookies.getObject('locale') || 'en');
  });
});
angular.module('zNocacheLib', []);

angular.module('zNocacheLib').config(function ($httpProvider) {
  //initialize get if not there
  if (!$httpProvider.defaults.headers.get) {
    $httpProvider.defaults.headers.get = {};
  }

  // Answer edited to include suggestions from comments
  // because previous version of code introduced browser-related errors

  //disable IE ajax request caching
  $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
  // extra
  $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
  $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
});

angular.module('zServiceLib', [])
angular.module('zServiceLib').factory('zFunctionService', function ($http, $window) {
  return {
    stringifyJson: function (obj) {
      return encodeURIComponent(JSON.stringify(obj))
    },
    openTab: function (href) {
      $window.open(href, '_blank')
    }
  }
})
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
})