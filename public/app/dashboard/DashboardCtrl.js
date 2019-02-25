app.controller('DashboardCtrl', function(CardsService, CategoryService, $scope, $location, $http, $rootScope, $stateParams, backend_server, $state, $timeout) {
    console.log('dashboard controller running');

    $scope.listCards = function () {
      CardsService.index()
      .then(function successCallback(data) {
        $scope.cards = data.data.data;
      },
      function errorCallback(error) {
        console.log(error);
      });
    }

    $scope.listCategories = function () {
      CategoryService.index()
      .then(function successCallback(data) {
        $scope.categories = data.data.data;
        console.log($scope.categories);
      },
      function errorCallback(error) {
        console.log(error);
      });
    }

    $scope.editCard = function () {
      console.log($stateParams.cardId);
      var id = $stateParams.cardId;
      $http.get(backend_server + '/cards/'+id)
      .then(function successCallback(response) {
        if(response.status == 200) {
          console.log('success');
          $scope.card = response.data.data;
          $scope.card = $scope.card[0];
          console.log($scope.card);
        }
      }, function errorCallback(response) {

      });
    }

    $scope.saveCard = function (card) {
      console.log(card);
      CardsService.update(card)
      .then(function successCallback(response) {
        console.log('Card updated msg from the controller');
        $state.transitionTo('dashboard.cards');
      },
      function errorCallback(response) {

      });
    }

    $scope.deleteCard = function (id) {
      if (confirm('Are you sure you want to delete card?')) {
        // delete it!
        CardsService.delete(id)
        .then(function successCallback(response) {
          $state.transitionTo('dashboard.cards');
        },
        function errorCallback(response) {
          console.log(response);
        });
      } else {
          // Do nothing!
      }
    }
});
