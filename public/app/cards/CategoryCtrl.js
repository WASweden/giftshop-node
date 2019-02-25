app.controller('CategoryCtrl', function($scope, $location, $http, $rootScope, $stateParams, backend_server, $state, $timeout, CategoryService) {

    $scope.loading = false;

    $scope.all = function() {
      CategoryService.index()
      .then(function successCallback(data) {
        $scope.categories = data.data.data;
      },
      function errorCallback(error) {
        console.log(error);
      });
    };

    $scope.create = function (category) {
      CategoryService.create(category);
      $scope.all();
    };

    $scope.update = function (category) {
      $scope.loading = true;
      console.log(card);
    };

    $scope.destroy = function (item) {
      CategoryService.delete(item.id);
      var index = $scope.categories.indexOf(item);
      $scope.categories.splice(index, 1);
    };

});
