app.controller("resultsCtrl", function($scope, $rootScope, $ionicHistory, PickaloApiService) {
  // $scope.result =
  // 	{
  // 		question: "Bomb: Which wire to cut?",
  // 		imageUrl: "",
  // 		voted: 5,
  // 		totalvotes: 10
  // 	};

  $scope.getResults = function() {
    PickaloApiService.getResults($rootScope.pickalo_id, function(result) {
      $scope.result = result;
    });
  }

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };


});
