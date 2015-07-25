app.controller("linkCtrl", function($scope, $ionicHistory) {
  $scope.oldPicks = [];

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };


});

