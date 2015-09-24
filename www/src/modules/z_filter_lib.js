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