angular.module('mainApp')



.factory('authorFactory', function($http,$q,baseUrl,$httpParamSerializerJQLike) {
 
    /*Creating an object*/        

    var authfac = {};

    
    /*Return a book of array*/
    authfac.getAuthor = function(author) {
        
        
        var deferred = $q.defer();    /*Creating an deffered object */
         
        $http({

                method:'POST',
                url: baseUrl+'/author/byname',
                data:'name='+author+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

    };
    
    
    /*Create new Author*/
    
    authfac.createAuthor = function(newAuthor) {
      
        var deferred = $q.defer();    /*Creating an deffered object */  
        
        $http({

                method:'POST',
                dataType:'JSON',
                url: baseUrl+'/author/new',
                data:$.param(newAuthor),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

    };
    
    
    /* function to update the author*/
    
    authfac.updateAuthor = function(author) {
        
        var deferred = $q.defer();    /*Creating an deffered object */  
        
        $http({

                method:'PUT',
                url: baseUrl+'/author/update',
                data:$.param(author),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/
        
    };
    
    
    /*function to remove the author */
    
    authfac.removeAuthor = function(authorID) {
        
        var deferred = $q.defer();    /*Creating an deffered object */  
        
        $http({

                method:'DELETE',
                url: baseUrl+'/author/remove',
                data:'empid='+authorID+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/
                
            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/
        
    };
    
    
  return authfac;

 });