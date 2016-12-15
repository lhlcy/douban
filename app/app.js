(function (angular) {
    // "use strict";

    // start your ride
    angular.module('moviecat', [
        'moviecat.home',
        'moviecat.details',
        'moviecat.movie_list',
        //'moviecat.in_theaters',
        //'moviecat.coming_soon',
        //'moviecat.top250',
         'moviecat.JSONP',
        'moviecat.autoActive'
    ]).controller('mainController',['$scope','$location',function($scope,$location){
        $scope.query='';
        $scope.search=function(){
            $location.url('/search?q='+$scope.query);
        }
    }])

})(angular);