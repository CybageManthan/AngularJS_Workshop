
angular.module('mainApp')

.constant('baseUrl','http://172.27.12.104:3000')

.factory('bookFactory', function($http,$q,baseUrl) {
 
    /*Creating an object*/        

    var bookfac = {};

    /*Return a book of array*/
    bookfac.getBooks = function() {
        
        var deferred = $q.defer();    /*Creating an deffered object */
        
            $http({

                method:'GET',
                url: baseUrl + '/book/list',

            }).success(function(data){

                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

            };
        

    /*Returning a single book */
    
    bookfac.getBook = function(isbn) {

        var deferred = $q.defer();    /*Creating an deffered object */
         
        $http({

                method:'POST',
                url: baseUrl+'/book/byisbn',
                data:'isbn='+isbn+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

            };
    
    /*Creating a New Book */
    
     bookfac.createBook = function(newBook) {

         var deferred = $q.defer();    /*Creating an deffered object */  
        
        $http({

                method:'POST',
                dataType:'JSON',
                url: baseUrl+'/book/new',
                data:$.param(newBook),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

        }; /*end of New Book function */
    
   
     bookfac.updateBook = function(book) {
        
        var deferred = $q.defer();    /*Creating an deffered object */  
        
        $http({

                method:'PUT',
                url: baseUrl+'/book/update',
                data:$.param(book),
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/
        
    };
    
    
    /*function to remove the author */
    
    bookfac.removeBook = function(bookID) {
        
        var deferred = $q.defer();    /*Creating an deffered object */  
        
        $http({

                method:'DELETE',
                url: baseUrl+'/book/remove',
                data:'isbn='+bookID+'',
                headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(data){
                
                deferred.resolve(data); /*On success resolved the Data*/
                
            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/
        
    };
    
    


    return bookfac;

 });