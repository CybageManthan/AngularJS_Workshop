/*-----------------------------------CONTROLLER FOR AUTHOR---------------------------*/
/*-------------------------------CREATE/UPDATE/DELETE/GET AUTHOR------------------------*/
/*---------------CONTROLLER USES FACTORY OBJECT'S METHODS-----------------------------*/

'use strict';

(function(angular) {
    
angular.module('mainApp')

.controller('authController',['$scope','$stateParams','authorFactory',function($scope,$stateParams,authorFactory){


    /*DISPLAYING THE AUTHOR DATA */
      
    authorFactory.getAuthor($stateParams.id).then(function(data){
            
            /*ON SUCCESS*/
        
            $scope.showRemoveAuthorData = true;
            $scope.author = data; 
        
            },
            function(data) {
            
                 /* ON FAILURE*/
            });
    
        
    /*FUNCTION TO CREATE A NEW AUTHOR*/
    
    $scope.addNewAuthor = function(newAuthor) {
        
        authorFactory.createAuthor(newAuthor).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsAuthorAdded = !$scope.IsAuthorAdded;
            $scope.hideshowAuthorForm = true;
            
            
        },
        function(data) {
            
            /*ON FAILURE*/
        });
    };
    
    
    /*DISPLAYING THE FORM WHEN USER CLICK ON EDIT BUTTON */
    
    $scope.editAuthorData = function() {
 
        $scope.showForm = !$scope.showForm;
        
    };
    
    
    /* FUNCTION TO UPDATE THE AUTHOR DATA */
    
    $scope.updateAuthorData = function(author) {
        
        authorFactory.updateAuthor(author).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsAuthorUpdatedRemoved = !$scope.IsAuthorUpdatedRemoved;
            $scope.showRemoveAuthorData = false;
            $scope.showForm = !$scope.showForm;
            
        });
        
    };
    
   
    /* FUNCTION TO DELETE THE EXISTING AUTHOR */
    
    $scope.deleteAuthorData = function(authorID) {
        
        authorFactory.removeAuthor(authorID).then(function(data){
            
            $scope.message = data.message;
            $scope.IsAuthorUpdatedRemoved = !$scope.IsAuthorUpdatedRemoved;  
            $scope.showRemoveAuthorData = false;
            $scope.showForm = !$scope.showForm;
        });
        
    };
    
    
    
    
}]); /*END OF CONTROLLER*/
    
})(angular);