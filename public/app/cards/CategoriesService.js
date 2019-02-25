app.service('CategoryService', function($http,backend_server) {
    return {
      index: function () {
        var getAllCategories = $http.get(backend_server + '/categories')
        .then(function successCallback(response) {
          if(response.status == 200) {
            console.log('success from within index of category service');
            return response;
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return getAllCategories;
      },
      create: function (category) {
        var createCat = $http.post(backend_server + '/categories', category)
        .then(function successCallback(response) {
          if(response.status == 200) {
            console.log("succesfully posted:");
            console.log(response);
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return createCat;
      },
      delete: function (id) {
        var deleteCat = $http.delete(backend_server + '/categories/'+id)
        .then(function successCallback(response) {
          if(response.status == 200) {
            console.log("succesfully deleted from within CategoryService");
            console.log(response);
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return deleteCat;
      } //end delete
    };
});
