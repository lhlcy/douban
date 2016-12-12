/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){
    angular.module('moviecat.top250',['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250',{
            templateUrl:"./top250/view.html"
            //controller: 'Top250Controller'
        });
    }]);
})(angular);