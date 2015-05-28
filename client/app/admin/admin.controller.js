'use strict';

angular.module('bibliotecaApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, socket) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    

    $scope.delete = function(user) {

      User.remove({ id: user._id });
     
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {

          $scope.users.splice(i, 1);
        }
      });
    };


    $scope.devolver = function(prestamo, user){

     
      var estado = {disponible:true}
      $http.post('api/articulos/' + prestamo._id ,estado)
        .success(function(data){
          console.log('hola')
          console.log(data);
        });

        var pres = [];
        pres[0] = prestamo;
        pres[1] = user;


      $http.post('api/users/deletebook',pres)
        .success(function(data){
          
        console.log($scope.data);
        socket.unsyncUpdates('user');
         

        
        });  

       


    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('admin');
    });

  });

