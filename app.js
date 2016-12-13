/**
 * Created by sandrobirke on 09.12.16.
 */


(function(){

    var potatoApp = angular.module('potatoApp', []);

    potatoApp.controller('potatoCtrl', function($scope, $http){

        var jsonPath = 'data.json';
        $http.get(jsonPath).then(function(response){

            $scope.potatoData = response.data;

            // Typen als Array für Selectbox
            $scope.types = _.chain($scope.potatoData).map("typ").value();
            $scope.typesArr = [];
            angular.forEach($scope.types, function(types, index){
                angular.forEach(types, function(type, index){
                    $scope.typesArr.push(type);
                });
            });
            $scope.filteredTypes = _.chain($scope.typesArr).uniq().sortBy().value();

            // Typen als Array für Selectbox
            $scope.pickings = _.chain($scope.potatoData).map("ernte").value();
            $scope.pickingsArr = [];
            angular.forEach($scope.pickings, function(pickings, index){
                //angular.forEach(pickings, function(picking, index){
                    $scope.pickingsArr.push(pickings);
                //});
            });
            $scope.filteredPickings = _.chain($scope.pickingsArr).uniq().sortBy().value();



        });

    });


    potatoApp.filter('arrayToList', function(){
        return function(arr) {
            return arr.join(',');
        }
    });

    potatoApp.filter('typeFilter', ['$filter', function($filter){

        return function(potatoData, selectedTypes){

            var types = [];

            angular.forEach(potatoData, function(item){
                if(item.typ.indexOf(selectedTypes) != -1){
                    item.hit = true;
                    types.push(item);
                }
                else {
                    item.hit = false;
                    types.push(item);
                }
            });

            return types;

        }

    }]);


    potatoApp.filter('pickingFilter', ['$filter', function($filter){

        return function(potatoData, selectedPicking){

            var pickings = [];
            console.log(selectedPicking);

            angular.forEach(potatoData, function(item){
                if(item.ernte.indexOf(selectedPicking) != -1){
                    item.pick = true;
                    pickings.push(item);
                }
                else {
                    item.pick = false;
                    pickings.push(item);
                }
            });


            return pickings;

        }

    }]);



})();