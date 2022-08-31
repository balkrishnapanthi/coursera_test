(function(){
  'use strict';
  angular.module("Checking App",[])
  .controller("Check",MyController);
  MyController.$inject=['$scope'];
  function MyController($scope)
  {
      $scope.textbo="";
      $scope.result="Result";
    $scope.MyFunc=  function ()
      {
        var str = $scope.textbo;
        if(str=="")
        {
          $scope.result="Please enter data first";
        }
        else
        {
          var arr = str.split(",");
          var size =arr.length;
            $scope.result=size;
            if(size<=3)
            {
                $scope.result="Enjoy!";
            }
            else{
                $scope.result="Too Much";
            }
        }


      }
  }

})();
