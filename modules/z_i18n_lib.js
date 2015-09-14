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