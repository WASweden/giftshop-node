app.controller('CardsCtrl', function(CardsService, $scope, $location, $http, $rootScope, $stateParams, backend_server, $state, $timeout) {
    console.log('controller running');

    $scope.loading = false;
    //$rootScope.items_in_cart = 0;
    //$rootScope.items_in_cart = JSON.parse(localStorage.getItem("Cards")).length;
    // GET Cards
    $scope.get_cards = function() {
      var EcMessage = localStorage.getItem("EmptyCartMessage");
      if (EcMessage == null) {
        console.log("No message");
        $scope.ecm = false;
      } else {
        $scope.ecm = true;
        $scope.ecm_body = EcMessage;
        console.log(EcMessage);
        localStorage.removeItem("EmptyCartMessage");
        $timeout(function () {
          // TODO: fade out message after 3 seconds.
          $scope.ecm = false;
          $scope.$apply();
        }, 1000);
      };

      console.log('get_cards');
      // Get cards
      CardsService.index()
      .then(function successCallback(response) {
        if(response.status == 200) {
          console.log('success');
          $scope.cards = response.data.data;
          console.log($scope.cards);
        }
      }, function errorCallback(response) {

      });
    };

    // GET Single Card
    $scope.view_card = function() {
      var id = $stateParams.cardId;
      CardsService.view(id)
      .then(function successCallback(response) {
        console.log(response);
        $scope.card = response.data.data[0];
      }, function errorCallback(response) {
      });
    };

    $scope.add_to_cart = function(card) {
      console.log('Adding this card id to cart: '+card.id);
      var product = {
        id: card.id,
        price: card.price,
        description: card.description,
        type_of_card: card.type_of_card
      };

      var existingCards = JSON.parse(localStorage.getItem("Cards"));
      if(existingCards == null) existingCards = [];

      localStorage.setItem("card", JSON.stringify(product));

      // Save existingCards back to local storage
      existingCards.push(product);
      localStorage.setItem("Cards", JSON.stringify(existingCards));

      //localStorage["Cart"] = angular.toJson(card);
      $state.transitionTo('cart');
    };

    $scope.create = function (card) {

    };

    $scope.update = function (card) {
      $scope.loading = true;
      console.log(card);
    };

    $scope.destroy = function (id) {
      CardsService.delete(id);
    };

    // Get account data for edit form
    $scope.load_account = function(){
      $scope.loading = true;

      var my_key;

      my_key = JSON.parse(localStorage.getItem('User'));
      my_key = my_key.key;

        //load user details from server

        var id = $rootScope.User.id;
        $http.get(backend_server + '/api_users/show/' + id + '.json', {headers: {'X-PP-Key':my_key}})
            .then(function successCallback(response) {
                if(response.status == 200) {
                  $scope.account = response.data.data.User;
                  // console.log($scope.account);
                  $scope.account.company = $rootScope.User.company_name;
                  $scope.loading = false;
                }
            }, function errorCallback(response) {
            });

    };
});
