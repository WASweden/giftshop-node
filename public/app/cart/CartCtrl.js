app.controller('CartCtrl', function($scope, $location, $http, $rootScope, $stateParams, backend_server, $state) {
  console.log("I'm the cart controller!");

  $scope.sum = function(items, prop) {
    return items.reduce(function(a, b) {
      return a + b[prop];
    }, 0);
  };

  $scope.cart_contents = function () {
    var my_products = JSON.parse(localStorage.getItem('Cards'));
    console.log(my_products);
    $scope.products = my_products;
    $rootScope.items_in_cart = my_products.length;

    $scope.total_amount = $scope.sum($scope.products, 'price');
    console.log($scope.total_amount);
  };

  $scope.check_if_should_redirect_to_cards = function (items) {
    if (items == 0) {
      // TODO: add message "Your cart is empty"
      localStorage.setItem("EmptyCartMessage", "Varukorgen är tomt. Beställ en gåvobevis.");
      $state.transitionTo('cards');
    }
  }

  $scope.remove_from_cart = function (item) {
    console.log("Removing this");
    var index = $scope.products.indexOf(item);
    $scope.products.splice(index, 1);
    localStorage.setItem("Cards", JSON.stringify($scope.products));
    $scope.total_amount = $scope.sum($scope.products, 'price');
    $rootScope.items_in_cart = $scope.products.length;
    $scope.check_if_should_redirect_to_cards($rootScope.items_in_cart)
  }
});
