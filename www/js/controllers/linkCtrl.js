app.controller("linkCtrl", function($scope, $rootScope, $ionicHistory) {
  $scope.oldPicks = [];

  $scope.pickalo = {
    id: $rootScope.form_id,
    link: $rootScope.link
  };


  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.share = function() {

  };

});
