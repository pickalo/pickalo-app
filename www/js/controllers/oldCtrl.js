app.controller("oldCtrl", function($scope, $ionicHistory) {
  $scope.oldPicks = [];

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };


});

