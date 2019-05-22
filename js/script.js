var Pokemon=angular.module("Pokemon",[])
Pokemon.controller("Pokedex",function($scope,$rootScope,$http){
   $http({
   	method: "GET",
   	url:"https://pokeapi.co/api/v2/pokemon/20"
   }).then(function callbackSuccess(y){
     console.log(y);

   })	
	
})