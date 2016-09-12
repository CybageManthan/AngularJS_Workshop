/*-----------------------------------FACTORY FOR BOOK---------------------------*/
/*--------------------AJAX REQUESTS AND SERVICING CONTROLLER WITH REQUIRED DATA --------------*/
/*-------------------------- USAGE OF PROMISE. $Q AND $HTTP SERVICES.*/

'use strict';

(function(angular) {

angular.module('mainApp')

.constant('baseUrl','http://172.27.12.104:3000')

.factory('bookFactory',['$http','$q','baseUrl',function($http,$q,baseUrl) {
 
   /*CREATE ONE OBJECT*/          

    var bookFactory = {};

   /*GET REQUEST TO FETCH ALL BOOKS */
    
    bookFactory.getBooks = function() {

/* --------------------------------- YOU CAN USE PROMISE ------------------------------------ */        
        
/*    var deferred = $q.defer();    CREATING A DEFERRED OBJECT 
        
            $http({

                method:'GET',
                url: baseUrl + '/book/list',

            }).success(function(data){

                deferred.resolve(data); ON SUCCESS RESOLVED THE DATA

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW THE ERROR

            })

            return deferred.promise;  RETURNING THE PROMISE  */ 
        
        
/* --------------------------------- OR ------------------------------------ */          
        
        return $http.get(baseUrl+'/book/list').then(function(respond){
           
                    return respond.data;
        });
        

    };
        

  
    /*POST REQUEST TO FETCH THE EXISTING BOOK BASED ON PARAMETER */
    
    bookFactory.getBook = function(isbn) {

/* --------------------------------- YOU CAN USE PROMISE ------------------------------------ */        
/*        var deferred = $q.defer();    CREATING A DEFERRED OBJECT 
         
        $http({

                method:'POST',
                url: baseUrl+'/book/byisbn',
                data:'isbn='+isbn+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function(data){
                
                deferred.resolve(data); ON SUCCESS RESOLVED THE DATA

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW THE ERROR

            })

            return deferred.promise; RETURNING THE PROMISE*/
        
        
/* --------------------------------- OR ------------------------------------ ------------------*/                  
        
            var header = {
                    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            }
            
            var data  = { "isbn" : isbn };
        
            return $http.post(baseUrl+'/book/byisbn',data,header).then(function(respond){
                
                     return respond.data;
                });

            };
    
    
    
    
    /*POST REQUEST TO CREATE A NEW BOOK */
    
     bookFactory.createBook = function(newBook) {
         
/* --------------------------------- YOU CAN USE PROMISE ------------------------------------ */ 
         
/*         var deferred = $q.defer();    CREATING A DEFERRED OBJECT 
        
        $http({

                method:'POST',
                dataType:'JSON',
                url: baseUrl+'/book/new',
                data:$.param(newBook),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); ON SUCCESS RESOLVED THE DATA

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW THE ERROR

            })

            return deferred.promise; RETURNING THE PROMISE */

/* --------------------------------- OR ------------------------------------ ------------------*/                    
            var header = {
                    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            }
            
            return $http.post(baseUrl+'/book/new',newBook,header).then(function(respond){
                
                    return respond.data;
            });         
         
         

        }; /*end of New Book function */
    
   
    
     /*PUT REQUEST TO UPDATE THE EXISTING BOOK*/
    
     bookFactory.updateBook = function(book) {

/* --------------------------------- YOU CAN USE PROMISE ------------------------------------ */ 
         
/*        var deferred = $q.defer();    CREATING A DEFERRED OBJECT 
        
        $http({

                method:'PUT',
                url: baseUrl+'/book/update',
                data:$.param(book),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); ON SUCCESS RESOLVED THE DATA

            }).error(function(data){
 
                deferred.reject('There was an error'); ON FAILURE SHOW THE ERROR

            })

            return deferred.promise; RETURNING THE PROMISE*/
         
/* --------------------------------- OR ------------------------------------ ------------------*/           
            var header = {
                    'Content-type':'application/x-www-form-urlencoded; charset=UTF-8',
            }
            
            return $http.put(baseUrl+'/book/update',book,header).then(function(respond){
                
                    return respond.data;
            });             
         
        
    };
    
    
    /*DELETE REQUEST TO REMOVE THE EXISTING BOOK */
    
    bookFactory.removeBook = function(bookID) {

/* --------------------------------- YOU CAN USE PROMISE ------------------------------------ */        
        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */  
        
        $http({

                method:'DELETE',
                url: baseUrl+'/book/remove',
                data:'isbn='+bookID+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVED THE DATA*/
                
            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW THE ERROR*/

            })

            return deferred.promise; /*RETURNING THE PROMISE*/
        
/*-----------------------------------------------OR(NOT WORKING) ---------------------------  */

/*          var data = { isbn: bookID };
      
            var header =  {
                        
                        'Content-type':'application/json; charset=UTF-8',
             }
             
            return $http.delete(baseUrl+'/book/remove',JSON.stringify(data),header)
                        .then(function(respond){
                
                    return respond.data;
            });        
 */       
        
    };
    

    return bookFactory; /* RETURN THE FACTORY OBJECT TO CONTROLLER*/

 }]); /*END OF FACTORY*/
    
})(angular);