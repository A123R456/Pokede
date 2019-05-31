var Pokemon=angular.module("Pokemon",[])
Pokemon.controller("Pokedex",function($scope,$rootScope,$http){
   $scope.PokedexB = [];

   for (var i = 0; i  < 100; i++) {
   $http({
   	method: "GET",
   	url:"https://pokeapi.co/api/v2/pokemon/"+i
   }).then(function callbackSuccess(y){
     $scope.PokedexB.push(y);

   })	
	

	}
})