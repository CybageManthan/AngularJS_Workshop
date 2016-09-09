/*-----------------------------------FACTORY FOR BOOK---------------------------*/
/*--------------------AJAX REQUESTS AND SERVICING CONTROLLER WITH REQUIRED DATA --------------*/
/*-------------------------- USAGE OF PROMISE. $Q AND $HTTP SERVICES.*/


angular.module('mainApp')

.constant('baseUrl','http://172.27.12.104:3000')

.factory('bookFactory', function($http,$q,baseUrl) {
 
   /*CREATE ONE OBJECT*/          

    var bookfac = {};

   /*GET REQUEST TO FETCH ALL BOOKS */
    
    bookfac.getBooks = function() {
        
        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */
        
            $http({

                method:'GET',
                url: baseUrl + '/book/list',

            }).success(function(data){

                deferred.resolve(data); /*ON SUCCESS RESOLVED THE DATA*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW THE ERROR*/

            })

            return deferred.promise; /*RETURNING THE PROMISE*/

            };
        

    /*POST REQUEST TO FETCH THE EXISTING BOOK BASED ON PARAMETER */
    
    bookfac.getBook = function(isbn) {

        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */
         
        $http({

                method:'POST',
                url: baseUrl+'/book/byisbn',
                data:'isbn='+isbn+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVED THE DATA*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW THE ERROR*/

            })

            return deferred.promise; /*RETURNING THE PROMISE*/

            };
    
    /*POST REQUEST TO CREATE A NEW BOOK */
    
     bookfac.createBook = function(newBook) {

         var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */  
        
        $http({

                method:'POST',
                dataType:'JSON',
                url: baseUrl+'/book/new',
                data:$.param(newBook),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVED THE DATA*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW THE ERROR*/

            })

            return deferred.promise; /*RETURNING THE PROMISE*/

        }; /*end of New Book function */
    
   
    
     /*PUT REQUEST TO UPDATE THE EXISTING BOOK*/
    
     bookfac.updateBook = function(book) {
        
        var deferred = $q.defer();    /*CREATING A DEFERRED OBJECT */  
        
        $http({

                method:'PUT',
                url: baseUrl+'/book/update',
                data:$.param(book),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*ON SUCCESS RESOLVED THE DATA*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*ON FAILURE SHOW THE ERROR*/

            })

            return deferred.promise; /*RETURNING THE PROMISE*/
        
    };
    
    
    /*DELETE REQUEST TO REMOVE THE EXISTING BOOK */
    
    bookfac.removeBook = function(bookID) {
        
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
        
    };
    

    return bookfac; /* RETURN THE FACTORY OBJECT TO CONTROLLER*/

 }); /*END OF FACTORY*/