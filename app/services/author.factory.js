/*-----------------------------------FACTORY FOR AUTHOR---------------------------*/
/*--------------------AJAX REQUESTS AND SERVICING CONTROLLER WITH REQUIRED DATA --------------*/
/*-------------------------- USAGE OF PROMISE. $Q AND $HTTP SERVICES.*/

angular.module('mainApp')

.factory('authorFactory', function($http,$q,baseUrl) {
 
    /*CREATE ONE OBJECT*/        

    var authfac = {};

    
    /*GET REQUEST TO FETCH EXISTING USER BASED ON PARAMETER */
    
    authfac.getAuthor = function(author) {
        
        
        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */
         
        $http({

                method:'POST',
                url: baseUrl+'/author/byname',
                data:'name='+author+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVE DATA */

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW ERROR*/

            })

            return deferred.promise; /*RETURN THE PROMISE*/

    };
    
    
    /*POST REQUST TO CREATE A NEW AUTHOR */
    
    authfac.createAuthor = function(newAuthor) {
      
        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */  
        
        $http({

                method:'POST',
                dataType:'JSON',
                url: baseUrl+'/author/new',
                data:$.param(newAuthor),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVE DATA */

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW ERROR*/

            })

            return deferred.promise; /*RETURN THE PROMISE*/

    };
    
    
    /* PUT REQUEST TO UPDATE THE EXISTING AUTHOR */
    
    authfac.updateAuthor = function(author) {
        
        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */ 
        
        $http({

                method:'PUT',
                url: baseUrl+'/author/update',
                data:$.param(author),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVE DATA */

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW ERROR*/

            })

            return deferred.promise; /*RETURN THE PROMISE*/
        
    };
    
    
    /*DELETE REQUEST TO REMOVE THE EXSITING AUTHOR */
    
    authfac.removeAuthor = function(authorID) {
        
        var deferred = $q.defer();   /*CREATING A DEFERRED OBJECT */  
        
        $http({

                method:'DELETE',
                url: baseUrl+'/author/remove',
                data:'empid='+authorID+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVE DATA */
                
            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW ERROR*/

            })

            return deferred.promise; /*RETURN THE PROMISE*/
        
    };
    
    
  return authfac; /* RETURN THE FACTORY OBJECT TO CONTROLLER */

 }); /* END OF FACTORY*/