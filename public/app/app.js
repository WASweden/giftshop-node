var app = angular.module('app', [
  'ui.bootstrap',
  'ui.router'
]);

angular.module('app').constant('backend_server', 'http://localhost:3000/api');
//angular.module('app').constant('backend_server', 'http://wa.createhq.com/app/data');



// Routes
app.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    // HOME
    .state('cards', {
      url:  '/cards',
      templateUrl: 'app/cards/cards.html',
      controller: 'CardsCtrl'
    })
    .state('card', {
      url: '/card/{cardId}',
      templateUrl: 'app/cards/cards.view.html',
      controller: 'CardsCtrl'
    })
    // Cart
    .state('cart', {
      url: '/cart',
      templateUrl: 'app/cart/cart.html',
      controller: 'CartCtrl'
    })
    // Checkout
    .state('checkout', {
      url: '/privat/checkout',
      templateUrl: 'app/cart/checkout.html',
      controller: 'CartCtrl'
    })
    // Dashboard
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    })
    // Dashboard - Cards
    .state('dashboard.cards', {
      url: '/cards',
      templateUrl: 'app/dashboard/dashboard.cards.html',
      controller: 'DashboardCtrl'
    })
    .state('dashboard.edit_card', {
      url: '/cards/edit/{cardId}',
      templateUrl: 'app/dashboard/dashboard.cards.edit.html',
      controller: 'DashboardCtrl'
    })
    ;

    $urlRouterProvider.otherwise('/cards');
});
