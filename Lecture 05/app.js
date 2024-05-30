(function(){
'use strict';

angular.module('myFirstApp', [])

.controller("MyFirstController", function ($scope){
 $scope.name = "YaaKov";
 $scope.sayHello = function () {
 	return "Hello Coursera!"
 };

});

})();
