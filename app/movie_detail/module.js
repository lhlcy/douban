/**
 * Created by Administrator on 2016/12/15 0015.
 */
(function(angular){
    angular.module('moviecat.details',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/details/:id?',{
            templateUrl:'movie_detail/view.html',
            controller:'DetailController'
        })
    }]).controller('DetailController',['$scope','$routeParams','itcastJSONP',function($scope,$routeParams,itcastJSONP){
console.log(23);
        var id=$routeParams.id;
            console.log(123);
            itcastJSONP.jsonp('https://api.douban.com/v2/movie/subject/'+id, {},function(data){
            $scope.movieDetail=data;
            console.log(data);
            $scope.$apply();
        });
    }]);
})(angular);