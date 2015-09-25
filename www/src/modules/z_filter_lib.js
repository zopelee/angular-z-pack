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