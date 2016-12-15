/**
 * Created by sandrobirke on 09.12.16.
 */


(function(){

    var potatoApp = angular.module('potatoApp', []);

    potatoApp.controller('potatoCtrl', function($scope, $http){

        var jsonPath = 'data.json';
        $http.get(jsonPath).then(function(response){

            $scope.potatoData = response.data;
			
			// Kochtypen als Object
			$scope.typesArr = [];
			for(var i = 0; i < $scope.potatoData.length; i++){
				for(var k = 0; k < $scope.potatoData[i].typ.length; k++){
					$scope.typesArr.push($scope.potatoData[i].typ[k]);
					}
				}	
			$scope.uniqueTypes = $scope.typesArr.filter(function(item, index){
				return $scope.typesArr.indexOf(item) == index;
				});
				
			// Erntezeit als Object
			$scope.pickingArr = [];
			for(var i = 0; i < $scope.potatoData.length; i++){
				for(var k = 0; k < $scope.potatoData[i].ernte.length; k++){
					$scope.pickingArr.push($scope.potatoData[i].ernte[k]);
					}
				}	
			$scope.uniquePicking = $scope.pickingArr.filter(function(item, index){
				return $scope.pickingArr.indexOf(item) == index;
				});
			
			// Filter	
			$scope.customFilter = function(item){
				if(item === null){
					return "";
					} else {
					return item;
					}
				}
		
        });

    });

    potatoApp.filter('arrayToList', function(){
        return function(arr) {
            return arr.join(',');
        }
    });


})();