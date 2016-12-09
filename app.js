/**
 * Created by sandrobirke on 09.12.16.
 */


(function(){

    var potatoApp = angular.module('potatoApp', []);

    potatoApp.controller('potatoCtrl', function($scope, $http){

        var jsonPath = 'data.json';
        $http.get(jsonPath).then(function(response){

            $scope.potatoData = response.data;

            console.log($scope.potatoData)

        });

    });

})();