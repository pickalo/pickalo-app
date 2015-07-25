app.controller("resultsCtrl", function($scope, $ionicHistory) {
  $scope.result = 
  	{
  		question: "Bomb: Which wire to cut?",
  		imageUrl: "",
  		voted: 5,
  		totalvotes: 10
  	};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };


});
