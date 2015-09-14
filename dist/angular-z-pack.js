angular.module('zCommonLib', []);

angular.module('zCommonLib').config(function ($httpProvider) {
  $httpProvider.defaults.transformRequest = function (data) {
    if (data === undefined || data instanceof String) {
      return data;
    } else {
      var str = [];
      for (var p in data)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
      return str.join("&");
    }
  };
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
  $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
});

angular.module('zCommonLib').run(function ($rootScope, $window) {
  $rootScope.$on('$routeChangeSuccess', function (evt, absNewUrl, absOldUrl) {
    $window.scrollTo(0, 0); //scroll to top of page after each route change
  });
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
