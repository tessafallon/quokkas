'use strict';

/* Controllers */

var quokkaApp = angular.module('quokkaApp', []);

quokkaApp.controller('QuokkaListCtrl', function($scope) {
  $scope.quokkas = [
    {'name': 'Fuzzy',
     'crime': 'Adorable larceny!',
     'snippet': 'Fuzzy likes to eat leaves, rob banks'},
    {'name': 'Peaches',
     'crime': 'Snuggly grand theft auto!',
     'snippet': "When he isn't napping, Peaches loves stealing cars!"},
    {'name': 'Geoffy',
     'crime': 'The cutest assault and battery!',
     'snippet': "It's hard to believe that this chubby little guy is a ticking time bomb of rage!"}
  ];
});
