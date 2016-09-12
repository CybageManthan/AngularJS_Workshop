/*-----------------------------------FACTORY FOR AUTHOR---------------------------*/
/*--------------------AJAX REQUESTS AND SERVICING CONTROLLER WITH REQUIRED DATA --------------*/
/*-------------------------- USAGE OF PROMISE. $Q AND $HTTP SERVICES.*/

'use strict';

(function(angular) {

angular.module('mainApp')

.factory('authorFactory',['$http','$q','baseUrl', function($http,$q,baseUrl) {
 
    /*CREATE ONE OBJECT*/        

    var authorFactory = {};

    
    /*GET REQUEST TO FETCH EXISTING USER BASED ON PARAMETER */
    
    authorFactory.getAuthor = function(author) {

/*-------------------------  YOU CAN USE PROMISE ------------------------------------------------*/  
        
 /*       var deferred = $q.defer();    CREATING A DEFERRED OBJECT 
         
        $http({

                method:'POST',
                url: baseUrl+'/author/byname',
                data:'name='+author+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function(data){
                
                deferred.resolve(data); ON SUCCESS RESOLVE DATA 

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW ERROR

            })

            return deferred.promise; RETURN THE PROMISE*/
        

/* --------------------------------- OR -------------------------------------------------------*/                  
        
            var header = {
                    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            }
            
            var data  = { "name" : author };
        
            return $http.post(baseUrl+'/author/byname',data,header).then(function(respond){
                
                     return respond.data;
                });    

    };
    
    
    /*POST REQUST TO CREATE A NEW AUTHOR */
    
    authorFactory.createAuthor = function(newAuthor) {

/*-------------------------  YOU CAN USE PROMISE ------------------------------------------------*/  
        
 /*       var deferred = $q.defer();    CREATING A DEFERRED OBJECT   
        
        $http({

                method:'POST',
                dataType:'JSON',
                url: baseUrl+'/author/new',
                data:$.param(newAuthor),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); ON SUCCESS RESOLVE DATA 

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW ERROR

            })

            return deferred.promise; RETURN THE PROMISE*/
        
/* --------------------------------- OR ------------------------------------ ------------------*/                    
            var header = {
                    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            }
            
            return $http.post(baseUrl+'/author/new',newAuthor,header).then(function(respond){
                
                    return respond.data;
            });                 

    };
    
    
    /* PUT REQUEST TO UPDATE THE EXISTING AUTHOR */
    
    authorFactory.updateAuthor = function(author) {
        
/*-------------------------  YOU CAN USE PROMISE ------------------------------------------------*/          
       /* var deferred = $q.defer();    CREATING A DEFERRED OBJECT 
        
        $http({

                method:'PUT',
                url: baseUrl+'/author/update',
                data:$.param(author),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); ON SUCCESS RESOLVE DATA 

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW ERROR

            })

            return deferred.promise; RETURN THE PROMISE*/
        
/* --------------------------------- OR ------------------------------------ ------------------*/           
            var header = {
                    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            }
            
            return $http.put(baseUrl+'/author/update',author,header).then(function(respond){
                
                    return respond.data;
            });           
        
    };
    
    
    /*DELETE REQUEST TO REMOVE THE EXSITING AUTHOR */
    
    authorFactory.removeAuthor = function(authorID) {
        
/*-------------------------  YOU CAN USE PROMISE ------------------------------------------------*/  
        
        var deferred = $q.defer();   /*CREATING A DEFERRED OBJECT*/  
        
        $http({

                method:'DELETE',
                url: baseUrl+'/author/remove',
                data:'empid='+authorID+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /* ON SUCCESS RESOLVE DATA */
                
            }).error(function(data){
 
                deferred.reject('There was an error'); /* ON FAILURE SHOW ERROR*/

            })

            return deferred.promise; /*RETURN THE PROMISE*/
        
/*-----------------------------------------------OR(NOT WORKING) ---------------------------  */

/*          var data = { empid: authorID };
      
            var header =  {
                        
                        'Content-type':'application/json; charset=UTF-8',
             }
             
            return $http.delete(baseUrl+'/author/remove',JSON.stringify(data),header)
                        .then(function(respond){
                
                    return respond.data;
            });        
                */
        
    };
    
    
  return authorFactory; /* RETURN THE FACTORY OBJECT TO CONTROLLER */

 }]); /* END OF FACTORY*/
    
})(angular);