/**
 * Created by Administrator on 2016/12/13 0013.
 */
;(function(angular){
    angular.module('moviecat.JSONP',[]).service('itcastJSONP',['$window',function($window){
        this.jsonp=function(url,params,callback){
            var doc=$window.document;
            url+='?';
            for(var k in params){
                url+=k+"="+params[k]+'&';
            }
            var callbackName='itcast_jsop_'+(new Date()-0);
            url+='callback='+callbackName;
            var script=doc.createElement('script');
            script.src=url;
            doc.body.appendChild(script);
            $window[callbackName]=function(data){
                callback(data);
                doc.body.removeChild(script);
                delete $window[callbackName];
            };

        };
    }])
})(angular);