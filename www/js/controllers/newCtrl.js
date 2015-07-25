app.controller("newCtrl", function($scope, $ionicHistory, $ionicPlatform, $cordovaCamera, PickaloApiService) {
  $scope.images = [];
  $scope.form = {};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.openCamera = function() {
    $ionicPlatform.ready(function() {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
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

  $scope.postForm = function() {
    alert($scope.form.question);
    var form = {
      question: $scope.form.question,
      images: $scope.images
    };
    PickaloApiService.postForm(form).then(function(response) {
      alert(response);
    });
  };
});
