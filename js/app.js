var app = angular.module('cubeApp', []);  
   
 

   app.controller('cubeController', function($scope) {  
   $scope.result = 0;
    
   	$scope.submit = function(){
     var num = parseInt($scope.number);

     $scope.sum = 0;
     while(num > 0) {

       var r = num%10;
       console.log(r)
       num = parseInt(num/10);
       $scope.sum = $scope.sum + (r*r*r);

        }
     

     }

 
});

