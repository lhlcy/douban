/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){
    angular.module('moviecat.movie_list',['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:movieType/:page?',{
            templateUrl: './movie_list/view.html',
            controller: 'MovieListController'
        });
    }]).controller('MovieListController',['$scope','$http','itcastJSONP','$routeParams','$route',function($scope,$http,itcastJSONP,$routeParams,$route){
        $scope.isLoaded = true;
        //当前页面的条数
            $scope.pagesize=5;
        //根据路由获取当前的页数
            $scope.curpage=$routeParams.page|| 1;
            var movieStart=($scope.curpage-1)*$scope.pagesize;
            //$routeParams不仅可以获取到url里的参数的值
            itcastJSONP.jsonp('https://api.douban.com/v2/movie/'+ $routeParams.movieType,
                {
                    start:movieStart,
                    count:$scope.pagesize,
                        q:$routeParams.q||""
                },function(data){
                $scope.movie=data;

                $scope.totalPage=Math.ceil(data.total/$scope.pagesize);
                $scope.isLoaded = false;
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