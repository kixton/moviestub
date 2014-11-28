window.movieStubApp = angular.module('movieStubApp', ["ngRoute", "ngResource"]);
 
movieStubApp.controller("movieStubController", function ($scope, movieStubFactory) {
  $scope.headerSrc = "templates/header.html";
  $scope.movies = movieStubFactory.query();
  $scope.currMovie = null;
  
  $scope.getMovieById = function (id) {
    var movies = $scope.movies;
    // loop through movies array
    for (var i = 0; i < movies.length; i++) {
      var movie = $scope.movies[i];
      // find matching movie based on id
      if (movie.id == id) {
        // set current movie based on search
        $scope.currMovie = movie;
      }
    }
  };
  $scope.back = function () {
    window.history.back();
  };
});

movieStubApp.controller("movieDetailsController", 
  function ($scope, $routeParams) {
  $scope.getMovieById($routeParams.id);
});