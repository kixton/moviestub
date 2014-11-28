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
    // form to book a ticket
    .when('/bookTickets/:id', {
      templateUrl: 'templates/booktix.html',
      controller: 'bookTicketsController'
    })
    .when('/bookings', {
      templateUrl: 'templates/bookings.html',
      controller: 'bookingDetailsController'
    })
    .otherwise({
        redirectTo: "/"
    });
});