app.controller("newCtrl", function($scope, $ionicHistory, $ionicPlatform, $cordovaCamera) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.openCamera = function() {
    $scope.images = [
      {
        imgUrl: "http://i521.photobucket.com/albums/w331/poli_66/cage-1.jpg"
      },
      {
        imgUrl: "http://i521.photobucket.com/albums/w331/poli_66/cage-1.jpg"
      },
      {
        imgUrl: "http://i521.photobucket.com/albums/w331/poli_66/cage-1.jpg"
      },
      {
        imgUrl: "http://i521.photobucket.com/albums/w331/poli_66/cage-1.jpg"
      }
    ];

    $ionicPlatform.ready(function() {
      var options = {
        quality: 50,
        targetWidth: 300,
        targetHeight: 300,
        destinationType: Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope.images.push({
          imgUrl: imageURI,
        });
      }, function(err) {
        console.error(error);
      });
    });
  };
});
