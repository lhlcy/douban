/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){
    angular.module('moviecat.top250',['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250/:page?',{
            templateUrl:"./top250/view.html",
            controller: 'Top250Controller'
        });
    }]).controller('Top250Controller',['$scope','$http','itcastJSONP','$routeParams','$route',function($scope,$http,itcastJSONP,$routeParams,$route){
            $scope.pagesize=5;
        //根据路由获取当前的页数

            $scope.curpage=$routeParams.page|| 1;
            var movieStart=($scope.curpage-1)*$scope.pagesize;

            itcastJSONP.jsonp('https://api.douban.com/v2/movie/top250',{start:movieStart,count:$scope.pagesize},function(data){
                $scope.movie=data;
                console.log(data);
                $scope.totalPage=Math.ceil(data.total/$scope.pagesize);
                $scope.$apply();
            });
            $scope.getpage=function(current){
                if(current<=0||current>$scope.totalPage){
                    return;
                }
                $route.updateParams({page:current});
            };

        }]);
})(angular);