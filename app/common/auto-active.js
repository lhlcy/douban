/**
 * Created by Administrator on 2016/12/15 0015.
 */
(function(angular){
    angular.module('moviecat.autoActive',[])
        .directive('autoActive',['$location',function($location){
        return{
            link:function(scope,element){
                scope.location=$location;
                scope.$watch('location.url()',function(newValue){
                    var alink=element.children().attr('href');
                    if(alink.indexOf(newValue)>0){
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }
                })
            }
        }
    }])
})(angular);