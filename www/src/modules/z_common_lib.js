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