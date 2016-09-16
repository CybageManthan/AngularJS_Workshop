/*-----------------------------------CONTROLLER FOR AUTHOR---------------------------*/
/*-------------------------------CREATE/UPDATE/DELETE/GET AUTHOR------------------------*/
/*---------------CONTROLLER USES FACTORY OBJECT'S METHODS-----------------------------*/

'use strict';

(function(angular) {
    
angular.module('mainApp')

    /*
       * CONTROLLER METHOD OF ANGULAR
       * @param FIRST PARAMETER IS CONTROLLER NAME.
       * @param SECOND PARAMETER IS DEPENDENCIES INJECTION
    */

.controller('authController',['$scope','$stateParams','authorFactory',function($scope,$stateParams,authorFactory){

    /*
       * FUNCTION TO DISPLAY SINGLE AUTHOR DATA.
       * @param AUTHOR(i.e. AUTHORNAME) THIS IS THE FIRST PARAMETER TO GETAUTHOR METHOD
       * @onSucess DISPLAY DATA TO THE USER
    */  
    authorFactory.getAuthor($stateParams.id).then(function(data){
            
            /*ON SUCCESS*/
        
            $scope.showRemoveAuthorData = true;
            $scope.author = data; 
        
            },
            function(data) {
            
                 /* ON FAILURE*/
        
            }); /*END OF .getAuthor() FUNCTION*/
    
    /*
       * FUNCTION TO CREATE A NEW AUTHOR
       * @param AUTHOR OBJECT WITH THE NEW DATA.
       * @onSuccess DISPLAY MESSAGE TO THE USER AND SET THE FLAGS FOR NG_SHOW AND NG_HIDE
    */
    
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
    
    }; /*END OF .addNewAuthor() FUNCTION */
    
    
    /* FUNCTION DISPLAY THE FORM WHEN USER CLICK ON EDIT BUTTON */
    
    $scope.editAuthorData = function() {
 
        $scope.showForm = !$scope.showForm;
        
    };
    
    
    /*
       * FUNCTION TO UPDATE THE AUTHOR DATA
       * @param AUTHOR OBJECT WITH THE UPDATED DATA.
       * @onSuccess DISPLAY MESSAGE TO THE USER AND SET THE FLAGS FOR NG_SHOW AND NG_HIDE
    */
    
    $scope.updateAuthorData = function(author) {
        
        authorFactory.updateAuthor(author).then(function(data){
            
            /*ON SUCCESS*/
            
            $scope.message = data.message;
            $scope.IsAuthorUpdatedRemoved = !$scope.IsAuthorUpdatedRemoved;
            $scope.showRemoveAuthorData = false;
            $scope.showForm = !$scope.showForm;
            
        });
        
    };
    
    /*
       * FUNCTION TO DELETE THE EXISTING AUTHOR.
       * @param ID OF AUTHOR YOU WANT TO DELETE.
       * @onSuccess DISPLAY MESSAGE TO THE USER AND SET THE FLAGS FOR NG_SHOW AND NG_HIDE
    */
    
    $scope.deleteAuthorData = function(authorID) {
        
        authorFactory.removeAuthor(authorID).then(function(data){
            
            $scope.message = data.message;
            $scope.IsAuthorUpdatedRemoved = !$scope.IsAuthorUpdatedRemoved;  
            $scope.showRemoveAuthorData = false;
            $scope.showForm = !$scope.showForm;
        });
        
    }; /*END OF .deleteAuthorData() FUNCTION*/
    

}]); /*END OF CONTROLLER*/
    
})(angular);