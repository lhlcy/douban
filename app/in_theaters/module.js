/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){
    angular.module('moviecat.in_theaters',['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters',{
            templateUrl: './in_theaters/view.html'
            //controller: 'ComingSoonController'
        });
    }]);
})(angular);