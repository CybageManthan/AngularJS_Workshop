/*-----------------------------------FACTORY FOR AUTHOR----------------------------------*/
/*---------------AJAX REQUESTS AND SERVICING CONTROLLER WITH REQUIRED DATA --------------*/
/*-------------------------- USAGE OF PROMISE. $Q AND $HTTP SERVICES.---------------------*/

'use strict';

(function (angular) {

angular.module('mainApp')

    /*
       * FACTORY METHOD OF ANGULAR
       * @param FIRST PARAMETER IS FACTORY NAME.
       * @param SECOND PARAMETER IS DEPENDENCIES INJECTION
       * @return OBJECT TO THE CONTROLLER
    */

.factory('authorFactory', ['$http', '$q', 'commonServiceProvider', function ($http, $q, commonServiceProvider) {
 
    
    /*CREATE ONE OBJECT*/        

    var authorFactory = {};

    /*
       * GET REQUEST TO FETCH EXISTING USER BASED ON PARAMETER.
       * @param AUTHOR(i.e. AUTHORNAME) THIS IS THE FIRST PARAMETER TO GETAUTHOR METHOD
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    authorFactory.getAuthor = function(author) {

        var data  = { "name" : author };
        
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
        return commonServiceProvider.getDataUsingHTTPService('/author/byname','POST',data)
                
                .then(function(respond){
            
            return respond.data;
            
        })    

    }; /*END OF getAuthor() FUNCTION*/
    
    
    /*
       * POST REQUST TO CREATE A NEW AUTHOR.
       * @param NEWAUTHOR (OBJECT)
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    authorFactory.createAuthor = function(newAuthor) {
        
            var newAuthorJSONFormat = {
                
                "empid" : newAuthor.empid,
                "name"  : newAuthor.name,
                "email" : newAuthor.email,
                "skills" : newAuthor.skills.toString().split(','),
                "department" : newAuthor.department,
                "website" : newAuthor.website
                
            };
            

        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
return commonServiceProvider.getDataUsingHTTPService('/author/new','POST',newAuthorJSONFormat)
                
                .then(function(respond){
            
            return respond.data;
            
        })         
        
    };  /*END OF createAuthor() FUNCTION  */
    
    
    /*
       * PUT REQUEST TO UPDATE THE EXISTING AUTHOR.
       * @param AUTHOR (OBJECT) - WITH UPDATED VALUES
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    authorFactory.updateAuthor = function(author) {
                
        
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
        
        return commonServiceProvider.getDataUsingHTTPService('/author/update','PUT',author)
                
                .then(function(respond){
            
            return respond.data;
            
        })         

    }; /*END OF updateAuthor() FUNCTION */
    
    
    /*
       * DELETE REQUEST TO REMOVE THE EXSITING AUTHOR.
       * @param AUTHORID - ID OF THE AUTHOR YOU WANT TO UPDATE
       * @return RESPOND DATA TO THE CONTROLLER (SUCCESS OR ERROR)
    */
    
    authorFactory.removeAuthor = function(authorID) {
                    
        var data = {"empid":authorID};
        
        /*
           * ANGULAR PROVIDER METHOD TO GET REQUIRED DATA USING HTTP SERVICES
           * @param URL-FROM WHERE TO FETCH THE DATA
           * @param HTTP METHOD
           * @param REQUEST DATA
           * @return RESPONSE (PROMISE)
        */
        
        return commonServiceProvider.getDataUsingHTTPService('/author/remove','DELETE',data)
                
                .then(function(respond){
            
            return respond.data;
            
        }) 
        

    }; /*END OF .removeAuthor() METHOD */
       
  
    return authorFactory; /* RETURN THE FACTORY OBJECT TO CONTROLLER */

 }]); /* END OF FACTORY*/
    
})(angular);