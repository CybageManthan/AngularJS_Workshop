/*-----------------------------------CONTROLLER FOR BOOK---------------------------*/
/*-------------------------------CREATE/UPDATE/DELETE/GET BOOK------------------------*/
/*---------------CONTROLLER USES FACTORY OBJECT'S METHODS-----------------------------*/

angular.module('mainApp')

.controller('bookController',['$scope','$stateParams','bookFactory',function($scope,$stateParams,bookFactory){


    /* FETCH BOOKS DATA TO DISPLAY ON THE HOME PAGE */
    
	bookFactory.getBooks().then(function(data){
            
            $scope.books = data ; /*ON SUCCESS*/
        
            },
            function(data) {
            
                alert(data); /*ON FAILURE*/
            });
        
    
    
    /* FUNCTION TO FETCH EXISTING BOOK DATA */
    
    bookFactory.getBook($stateParams.id).then(function(data){
            
            /*ON SUCCESS*/
            $scope.showRemoveBookData = true;
            $scope.book = data;
        
            },
            function(data) {
            
                /*ON FAILURE*/
            });
    
    
    /*FUNCTION TO CREATE A NEW BOOK */
    
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
    }
    
    
    /*DISPLAYING THE FORM WHEN USER CLICK ON THE EDIT BUTTION */
    
    $scope.editBookData = function() {
 
        $scope.showBookForm = !$scope.showBookForm;
        
    };
    
    
    /*FUNCTION TU UPDATE THE EXISTING BOOK */
    
    $scope.updateBookData = function(book) {
        
        bookFactory.updateBook(book).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsBookUpdatedRemoved = !$scope.IsBookUpdatedRemoved;
            $scope.showRemoveBookData = false;
            $scope.showBookForm = !$scope.showBookForm;
            
        });
        
    };
    
   
    /*FUNCTION TO DELETE THE EXISTING BOOK */
    
    $scope.deleteBookData = function(bookID) {
        
        bookFactory.removeBook(bookID).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsBookUpdatedRemoved = !$scope.IsBookUpdatedRemoved;  
            $scope.showRemoveBookData = false;
            $scope.showBookForm = !$scope.showBookForm;
        });
        
    };
    
    

        
}]); /*END OF CONTROLLER*/
