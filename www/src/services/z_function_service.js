angular.module('zServiceLib').factory('zFunctionService', function ($http) {
  return {
    stringifyJson: function (obj) {
      return encodeURIComponent(JSON.stringify(obj))
    }
  }
})