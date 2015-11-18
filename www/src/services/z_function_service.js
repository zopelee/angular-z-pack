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