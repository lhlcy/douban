/**
 * Created by Administrator on 2016/12/12 0012.
 */
(function(angular){
    angular.module('moviecat.in_theaters',['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters/:page?',{
            templateUrl: './in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }])
        .controller('InTheatersController',['$scope','$http','itcastJSONP','$routeParams','$route',function($scope,$http,itcastJSONP,$routeParams,$route){
            //当前页面的条数
            $scope.pagesize=5;
            //根据路由获取当前的页数

            $scope.curpage=$routeParams.page|| 1;
            //if(!Number($scope.curpage)){
            //    return
            //    //$routeParams.page=1;
            //}
            var movieStart=($scope.curpage-1)*$scope.pagesize;

        itcastJSONP.jsonp('https://api.douban.com/v2/movie/in_theaters',{start:movieStart,count:$scope.pagesize},function(data){
            $scope.movie=data;
            console.log(data);
            $scope.totalPage=Math.ceil(data.total/$scope.pagesize);
            $scope.$apply();
            });
            $scope.getpage=function(current){
                if(Number(current)<=0||Number(current)>$scope.totalPage){
                    return;
                }
                $route.updateParams({page:current});
            };

    }]);
})(angular);