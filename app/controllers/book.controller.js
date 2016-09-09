angular.module('mainApp')

.controller('bookController',['$scope','$stateParams','bookFactory',function($scope,$stateParams,bookFactory){


    /*displaying books data */
    
	bookFactory.getBooks().then(function(data){
            
            $scope.books = data ; /*On Success*/
        
            },
            function(data) {
            
                alert(data); /*On Failure*/
            });
        
    
    
    /* function to fetch the one book */
    
    bookFactory.getBook($stateParams.id).then(function(data){
            
            //index = data.findIndex(x => x.isbn==$stateParams.id);
            $scope.showRemoveBookData = true;
            $scope.book = data; /*On Success*/
        
            },
            function(data) {
            
                alert(data); /*On Failure*/
            });
    
    
    /*function to create new Book*/
    
    $scope.addNewBook = function(newBook) {
        
        bookFactory.createBook(newBook).then(function(data){
            
            /*on Success*/
            $scope.message = data.message;
            $scope.IsBookAdded = !$scope.IsBookAdded;
            
            
        },
        function(data) {
            
            /*on Failure*/
        });
    }
    
    
    
    /*Displaying the form when user click on edit */
    $scope.editBookData = function() {
 
        $scope.showBookForm = !$scope.showBookForm;
        
    };
    
    
    /*Update the Book */
    
    $scope.updateBookData = function(book) {
        
        bookFactory.updateBook(book).then(function(data){
            
            /*on success*/
            
            $scope.message = data.message;
            $scope.IsBookUpdatedRemoved = !$scope.IsBookUpdatedRemoved;
            $scope.showRemoveBookData = false;
            $scope.showBookForm = !$scope.showBookForm;
            
        });
        
    };
    
   
    /*Delete the Book */
    
    $scope.deleteBookData = function(bookID) {
        
        bookFactory.removeBook(bookID).then(function(data){
            
            /*on success*/
            
            $scope.message = data.message;
            $scope.IsBookUpdatedRemoved = !$scope.IsBookUpdatedRemoved;  
            $scope.showRemoveBookData = false;
            $scope.showBookForm = !$scope.showBookForm;
        });
        
    };
    
    

        
}]); /*End of bookController*/
