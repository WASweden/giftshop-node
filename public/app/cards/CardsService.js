app.service('CardsService', function($http,backend_server) {
    return {
      index: function () {
        var getAll = $http.get(backend_server + '/cards')
        .then(function successCallback(response) {
          if(response.status == 200) {
            return response;
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return getAll;
      },
      view: function (id) {
        var view = $http.get(backend_server + '/cards/'+id)
        .then(function successCallback(response) {
          if(response.status == 200) {
            return response;
          }
        }, function errorCallback(response) {
          console.log("Problem");
        });
        return view;
      },
      create: function (data) {
        var create = $http.post(backend_server + '/cards', data)
        .then(function successCallback(response) {
          if(response.status == 200) {
            console.log("succesfully posted:");
            console.log(response);
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return create;
      },
      update: function (data) {
        var update = $http.put(backend_server + '/cards/'+data.id, data)
        .then(function successCallback(response) {
          if(response.status == 200) {
            console.log("Card succesfully update:");
            console.log(response);
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return update;
      },
      delete: function (id) {
        var del = $http.delete(backend_server + '/cards/'+id)
        .then(function successCallback(response) {
          if(response.status == 200) {
            console.log(response);
          }
        }, function errorCallback(response) {
          console.log('Problem');
        });
        return del;
      } //end delete
    };
});
