/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){
    angular.module('moviecat.coming_soon',['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/coming_soon',{
            templateUrl: './coming-soon/view.html',
            //controller: 'ComingSoonController'
        });
    }]);
    console.log(123);
})(angular);