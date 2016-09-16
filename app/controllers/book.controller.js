/*-----------------------------------CONTROLLER FOR BOOK---------------------------*/
/*-------------------------------CREATE/UPDATE/DELETE/GET BOOK------------------------*/
/*---------------CONTROLLER USES FACTORY OBJECT'S METHODS-----------------------------*/

'use strict';

(function(angular) {
    
angular.module('mainApp')

    /*
       * CONTROLLER METHOD OF ANGULAR
       * @param FIRST PARAMETER IS CONTROLLER NAME.
       * @param SECOND PARAMETER IS DEPENDENCIES INJECTION
    */

.controller('bookController',['$scope','$stateParams','bookFactory',function($scope,$stateParams,bookFactory){

    $scope.books = [];
    $scope.sortType = 'isbn';
    $scope.sortReverse = false;
    
    /*
       * FUNCTION TO DISPLAY BOOKS DATA.
       * @onSucess DISPLAY DATA TO THE USER(HOME PAGE)
    */ 
	bookFactory.getBooks().then(function(data){
            
            $scope.books = data ; /*ON SUCCESS*/
        
            },
            function(data) {
            
                /*ON FAILURE*/
     });
        

    /*
       * FUNCTION TO DISPLAY EXISTING BOOK DATA.
       * @param BOOK-ISBN NUMBER
       * @onSucess DISPLAY DATA TO THE USER
    */ 
    bookFactory.getBook($stateParams.id).then(function(data){
            
            /*ON SUCCESS*/
            $scope.showRemoveBookData = true;
            $scope.book = data;
        
            },
            function(data) {
            
                /*ON FAILURE*/
     });
    
    
    /*
       * FUNCTION TO CREATE A NEW BOOK
       * @param BOOK OBJECT WITH THE NEW DATA.
       * @onSuccess DISPLAY MESSAGE TO THE USER AND SET THE FLAGS FOR NG_SHOW AND NG_HIDE
    */
    $scope.addNewBook = function(newBook) {
        
        bookFactory.createBook(newBook).then(function(data){
            
            /*ON SUCCESS*/
            $scope.message = data.message;
            $scope.IsBookAdded = !$scope.IsBookAdded;
            $scope.hideshowBookForm = true;
            
            
        },
        function(data) {
            
            /*ON FAILURE*/
        });
    
    }; /*END OF .addNewBook() FUNCTION */
    
    
    /*FUNCTION TO DISPLAY WHEN USER CLICK ON THE EDIT BUTTION */
   
    $scope.editBookData = function() {
 
        $scope.showBookForm = !$scope.showBookForm;
        
    };
    
    
    /*
       * FUNCTION TU UPDATE THE EXISTING BOOK
       * @param BOOK OBJECT WITH THE UPDATED DATA.
       * @onSuccess DISPLAY MESSAGE TO THE USER AND SET THE FLAGS FOR NG_SHOW AND NG_HIDE
    */
    
    $scope.updateBookData = function(book) {
        
        bookFactory.updateBook(book).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsBookUpdatedRemoved = !$scope.IsBookUpdatedRemoved;
            $scope.showRemoveBookData = false;
            $scope.showBookForm = !$scope.showBookForm;
            
        });
        
    }; /*END OF .updateBookData() FUNCTION */
    
    
    /*
       * FUNCTION TO DELETE THE EXISTING BOOK.
       * @param BOOK ISBN ID WHICH YOU WANT TO REMOVE
       * @onSuccess DISPLAY MESSAGE TO THE USER AND SET THE FLAGS FOR NG_SHOW AND NG_HIDE
    */
    $scope.deleteBookData = function(bookID) {
        
        bookFactory.removeBook(bookID).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsBookUpdatedRemoved = !$scope.IsBookUpdatedRemoved;  
            $scope.showRemoveBookData = false;
            $scope.showBookForm = !$scope.showBookForm;
        });
        
    };  /*END OF .deleteBookData() FUNCTION */
    
    

        
}]); /*END OF CONTROLLER*/
    
})(angular);
