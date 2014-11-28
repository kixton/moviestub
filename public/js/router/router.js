movieStubApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl: "templates/home.html",
        controller: "movieStubController"
    })
    .when("/movie/:id", {
        templateUrl: "templates/movie.html",
        controller: "movieDetailsController"
    })
    .when('/bookTickets/:id', {
      templateUrl: 'templates/booktix.html',
      controller: 'bookTicketsController'
    })
    .otherwise({
        redirectTo: "/"
    });
});