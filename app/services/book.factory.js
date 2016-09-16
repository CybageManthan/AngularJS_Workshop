/*-----------------------------------FACTORY FOR BOOK---------------------------*/
/*---------------AJAX REQUESTS AND SERVICING CONTROLLER WITH REQUIRED DATA --------------*/
/*-------------------------- USAGE OF PROMISE. $Q AND $HTTP SERVICES.*/

'use strict';

(function(angular) {

angular.module('mainApp')

/*CONSTANT VALUE FOR ANGULAR APPLICATION*/

.constant('baseUrl','http://172.27.12.104:3000')

/*
    * RUN METHOD FOR PROVIDER TO MAKE HTTP SERVICE AVAILABLE THROUOUT APPLICATION
    * @param FIRST PARAMETER IS THE PROVIDER NAME
    * @param SECOND PARAMETER IS THE $HTTP SERVICE
    # @param THIRD PARAMETER IS THE BASEURL - CONSTANT WE HAVE DEFINED EARLIER.
*/

.run(function(commonServiceProvider,$http,baseUrl){
      
    commonServiceProvider.getDataUsingHTTPService = function (Url,Method,Data) {
            
            return $http({
            
                        url:baseUrl+Url,
                        method:Method,
                        data:Data,
                        headers : {'Content-Type' : 'application/json; charset=UTF-8'}
                
                    })
            
            };
    
}) /*END OF RUN METHOD*/

/*
       * FACTORY METHOD OF ANGULAR
       * @param FIRST PARAMETER IS FACTORY NAME.
       * @param SECOND PARAMETER IS DEPENDENCIES INJECTION
       * @return OBJECT TO THE CONTROLLER
*/

.factory('bookFactory',['$http','$q', 'commonServiceProvider',function($http,$q,commonServiceProvider) {
 
   /*CREATE ONE OBJECT*/          

    var bookFactory = {};
   
    /*
       * GET REQUEST TO FETCH ALL BOOKS .
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    bookFactory.getBooks = function() {
        
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
        return commonServiceProvider.getDataUsingHTTPService('/book/list','GET','').
        then(function(respond){
            
            return respond.data;
            
        })

    }; /*END OF .getBooks() METHOD */
    

    /*
       * POST REQUEST TO FETCH THE EXISTING BOOK BASED ON PARAMETER.
       * @param - PARAMETER IS THE ISBN NUMBER OF THE BOOK.
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    bookFactory.getBook = function(isbn) {

        
        var data  = { "isbn" : isbn };
        
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
        return commonServiceProvider.getDataUsingHTTPService('/book/byisbn','POST',data)
                
                .then(function(respond){
            
            return respond.data;
            
        })    
    
    
    }; /* END OF .getBook() FUNCTION */
    
    
    /*
       * POST REQUEST TO CREATE A NEW BOOK .
       * @param - BOOK OBJECT WITH THE NEW DATA
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
     bookFactory.createBook = function(newBook) {
            
            console.log(newBook.availableOn);
            
            var newAuthorJSONFormat = {
                
                "isbn" : newBook.isbn,
                "title"  : newBook.title,
                "author" : newBook.author,
                "price" : newBook.price,
                "availableOn" : newBook.availableOn.toString().split(',') 
            };   
            
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
         
         
       /* return commonServiceProvider.getDataUsingHTTPService('/book/new','POST',newAuthorJSONFormat).then(function(respond){

            return respond.data;
            
            }) */  
         

        }; /*END OF .createBook() FUNCTION */
    
    
    /*
       * PUT REQUEST TO UPDATE THE EXISTING BOOK .
       * @param - BOOK OBJECT WITH THE UPDATED DATA
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    bookFactory.updateBook = function(book) {
    
    /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
     */    
        
    return commonServiceProvider.getDataUsingHTTPService('/book/update','PUT',book)
                
                .then(function(respond){
            
            return respond.data;
            
        })   
  
    }; /*END OF .updateBook() FUNCTION*/
    
    
    /*
       * DELETE REQUEST TO REMOVE THE EXISTING BOOK.
       * @param - bookID ID Of BOOK WHICH YOU WANT TO REMOVE
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    bookFactory.removeBook = function(bookID) {

        var data = {"isbn":bookID};
        
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
        return commonServiceProvider.getDataUsingHTTPService('/book/remove','DELETE',data)
                
                .then(function(respond){
            
            return respond.data;
            
        })   
                

    };

    return bookFactory; /* RETURN THE FACTORY OBJECT TO CONTROLLER*/
    

 }]); /*END OF FACTORY*/
    
})(angular);