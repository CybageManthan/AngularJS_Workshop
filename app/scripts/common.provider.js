/*COMMON PROVIDER FOR GETTING HTTP SERVICES THROUGHT MY APPLICATION */


'use strict';

(function (angular) {

angular.module('mainApp')

    /*
        * ANGULAR PROVIDER FUNCTION TO CREATE PROVIDER SERVICE.
        * @param FIRST PARAMETER IS THE PROVIDER NAME
        * @param SECOND PARAMETER IS THE PROVIDER FUNCTION
    */

.provider('commonServiceProvider',function(){
   
    this.$get =  function ($http) {
        
        return {
          
            getDataUsingHTTPService : function (Url,Method,Data) {
            
            return $http({
            
                url:Url,
                method:Method,
                data:Data,
                headers:{
            
                        'Content-type':'application/json;charset=utf-8;'
                    }   
                })
            
            }
            
        } /*END OF RETURN*/
        
    }; /*END OF $GET FUNCTION */
    
    
}); /*END OF PROVIDER FUNCTION */
    
})(angular);