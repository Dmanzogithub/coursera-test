(function () {
'use strict';
angular.module('CountWord', [])
.controller('CountStringController', CountStringController);

CountStringController.$inject = ['$scope'];
function CountStringController($scope) {
  //$scope.dishes = "Yaakov have hungry";
  $scope.dishes = '';
  $scope.changeMsg = function () {
    //$scope.msg = "hello";
    var words = $scope.dishes;
    if (words == '') {
      $scope.msg = 'Please insert data first';
    }else{
      words = words.split(',');
      if (words.length <= 3) {
        $scope.msg = 'Enjoy!';
      }else{
        $scope.msg = 'Too much!';
      }
    }
    //words = words[1];
    //$scope.msg = words;
    /*if (words = '') {
      $scope.msg = 'Insert data first';
    }else if (words.length <=3 ){
      $scope.msg = 'es igual o menor a 3';
    }else{
      $scope.msg = 'es mayor a 3';
    }*/
  };
}


})();