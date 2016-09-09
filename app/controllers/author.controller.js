angular.module('mainApp')

.controller('authController',['$scope','$stateParams','authorFactory',function($scope,$stateParams,authorFactory){


    /*displaying author data */
      
    authorFactory.getAuthor($stateParams.id).then(function(data){
            
            //index = data.findIndex(x => x.name==$stateParams.id);
            $scope.showRemoveAuthorData = true;
            $scope.author = data; /*On Success*/
        
            },
            function(data) {
            
                 /*On Failure*/
            });
    
        
    /*function to create new Author*/
    
    $scope.addNewAuthor = function(newAuthor) {
        
        authorFactory.createAuthor(newAuthor).then(function(data){
            
            /*on Success*/
            $scope.message = data.message;
            $scope.IsAuthorAdded = !$scope.IsAuthorAdded;
            
            
        },
        function(data) {
            
            /*on Failure*/
        });
    }
    
    
    /*Displaying the form when user click on edit */
    $scope.editAuthorData = function() {
 
        $scope.showForm = !$scope.showForm;
        
    };
    
    
    /*Update the Author */
    
    $scope.updateAuthorData = function(author) {
        
        authorFactory.updateAuthor(author).then(function(data){
            
            /*on success*/
            
            $scope.message = data.message;
            $scope.IsAuthorUpdatedRemoved = !$scope.IsAuthorUpdatedRemoved;
            $scope.showRemoveAuthorData = false;
            $scope.showForm = !$scope.showForm;
            
        });
        
    };
    
   
    /*Delete the Author */
    
    $scope.deleteAuthorData = function(authorID) {
        
        authorFactory.removeAuthor(authorID).then(function(data){
            
            $scope.message = data.message;
            $scope.IsAuthorUpdatedRemoved = !$scope.IsAuthorUpdatedRemoved;  
            $scope.showRemoveAuthorData = false;
            $scope.showForm = !$scope.showForm;
        });
        
    };
    
    
    
    
}]); /*End of bookController*/