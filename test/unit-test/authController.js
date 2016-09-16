/*WRITE YOUR TEST CASES IN THIS FILE USING JASMIN DESCRIBE,TEST AND IT */
/*THIS FILE CONTAINS THE TEST CASES FOR THE AUTHORCONTROLLER and AUTHORFACTORY */

describe('Controller: authController',function(){
   
    /*LOAD THE MODULE USING BEFOREEACH FUNCTION*/
    
    beforeEach(angular.mock.module('mainApp'));
    beforeEach(angular.mock.module('ui.router'));
    
    var authController,scope,$httpBackend,authorFactory;
    
    /*INJECT MOCK DATA AND MOCK REQUEST THAT YOUR APPLICATION WILL GOING TO ASSERT*/
    
    beforeEach(inject(function(_$controller_,_$httpBackend_,_$q_,$rootScope,$stateParams,_authorFactory_){
        
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        authorFactory = _authorFactory_;
        $q = _$q_;
        
        $httpBackend.expectPOST("http://172.27.12.104:3000/author/byname").respond(200);
        $httpBackend.expectGET("views/header.html").respond(200);
        $httpBackend.expectGET("views/content.html").respond(200);
        $httpBackend.expectGET("views/footer.html").respond(200);
        
        
        /*CREATING A SCOPE VARIBLE FOR OUR CONTROLLER*/
        scope = $rootScope.$new();
        
        /*INITALIZE THE CONTROLLER*/
        
        authController = $controller('authController',{
           
            $scope:scope, authorFactory: authorFactory , $stateParams : $stateParams
            
        });
        
        
        
    })); /* END OF MOCKUP*/
    
    /*------------------------------- NOW CREATE YOUR TEST CASES----------------*/
    
    it('authController should be defined',function(){
        
       expect(authController).toBeDefined(); 
        
    });
    
    /*CHECK ALL CONTROLLER'S FUNCTION */
    
    describe('Check all controller function defined or not',function() {
        
        it('addNewAuthor function defined',function(){
           
            expect(scope.addNewAuthor).toBeDefined();
            
        });

        it('editAuthorData function should defined',function(){
           
           
            expect(scope.showForm).toBeFalsy();
            
            /*CALL THE FUNCTION TO SEE THE CHANGE*/
            
            scope.editAuthorData();
            expect(scope.showForm).toBeTruthy();
            
        });
              
        it('updateAuthorData function should defined',function(){
           
            expect(scope.updateAuthorData).toBeDefined();
            
        });
        
        it('deleteAuthorData function should defined',function(){
           
            expect(scope.deleteAuthorData).toBeDefined();
            
        });
        
        
        
    }); /*--------- END OF DESCRIBE -------------------------*/
    
    
    /*TEST FOR FACTORY OBJECT*/
    
    it('authorFactory should exist',function(){
       
        expect(authorFactory).toBeDefined();
        expect(authorFactory.getAuthor).toBeDefined();
        
    });
    
    /*POST REQUEST TO FETCH SINGLE AUTHOR*/
    
    describe('Get AUTHOR using POST request : getAuthor() function',function(){
       
        var oneAuthorData = {
                "_id": "57d278311dda260c54a573ed",
                "empid": 555,
                "name": "Manthan",
                "email": "manthanp@cybage.com",
                "skills": [
                  "Angular,Node,JS"
                ],
                "department": "Engineering",
                "website": "man.tech.in"
            };
        
        beforeEach(function(){
           
            spyOn(authorFactory,'getAuthor').and.callThrough();
            
        });
        
        it('Should return ONE AUTHOR Object and store it in author ',function(){
           
            var searchTerm = 'Manthan';
            $httpBackend.whenPOST("http://172.27.12.104:3000/author/byname").respond(200,$q.when(oneAuthorData));
            
            expect(authorFactory.getAuthor).not.toHaveBeenCalled();
            expect(scope.showRemoveAuthorData).toBeFalsy();
            expect(scope.author).toEqual(undefined);
            
            authorFactory.getAuthor(searchTerm).then(function(response){
               
                scope.author = response;
                
            });
            
            $httpBackend.flush();
            
            expect(authorFactory.getAuthor).toHaveBeenCalledWith(searchTerm);
            expect(scope.author).toBeDefined();
            expect(scope.showRemoveAuthorData).toBeTruthy();
            expect(scope.author.name).toEqual('Manthan');
                      
        });
        
     
    });  /* END OF POST REQUEST DESRIBE FUNCTION */
    
    
     /*POST REQUEST TO FETCH SINGLE BOOK*/
    
    describe('create newAuthor using POST Request : addNewAuthor() function',function(){
       
       var oneAuthorData = {
                "_id": "57d278311dda260c54a573ed",
                "empid": 555,
                "name": "Manthan",
                "email": "manthanp@cybage.com",
                "skills": [
                  "Angular,Node,JS"
                ],
                "department": "Engineering",
                "website": "man.tech.in"
            };
        
        var response = {
            
                "message" : "AUTHOR CREATED"
        };
        
        
        beforeEach(function(){
           
            spyOn(scope,'addNewAuthor').and.callThrough();
            
        });
        
        it('SHOULD CREATE SINGLE AUTHOR ',function(){
            $httpBackend.whenPOST("http://172.27.12.104:3000/author/new").respond(200,$q.when(response));
            
            expect(scope.addNewAuthor).not.toHaveBeenCalled();
           // expect(scope.hideshowAuthorForm).toBeFalsy();
            expect(scope.message).not.toBeDefined();
            expect(scope.IsAuthorAdded).toBeFalsy();
            
            scope.addNewAuthor(oneAuthorData);
            
            $httpBackend.flush();
            
            expect(scope.addNewAuthor).toHaveBeenCalledWith(oneAuthorData);
            expect(scope.message).toBeDefined();
            expect(scope.IsAuthorAdded).toBeTruthy();
            
        });
        
    
    }); /*END OF DESRIBE OF POST REQUEST addNewAuthor() function */
    
    
    /*PUT REQUEST TO UPDATE SINGLE BOOK*/
    
    describe('update Existing Author Using PUT request : updateAuthorData() function',function(){
       
        var oneAuthorData = {
                "_id": "57d278311dda260c54a573ed",
                "empid": 555,
                "name": "Manthan",
                "email": "manthanp@cybage.com",
                "skills": [
                  "Angular,Node,JS"
                ],
                "department": "Engineering",
                "website": "man.tech.in"
            };
        
        var response = {
            
                "message" : "AUTHOR UPDATED"
        };
        
        
        beforeEach(function(){
           
            spyOn(scope,'updateAuthorData').and.callThrough();
            
        });
        
        it('SHOULD UPDATE A SINGLE AUTHOR DATA',function(){
            $httpBackend.whenPUT("http://172.27.12.104:3000/author/update").respond(200,$q.when(response));
            
            expect(scope.updateAuthorData).not.toHaveBeenCalled();
            expect(scope.IsAuthorUpdatedRemoved).toBeFalsy();
            expect(scope.message).not.toBeDefined();
            expect(scope.showForm).toBeFalsy();
            
            scope.updateAuthorData(oneAuthorData);
            
            $httpBackend.flush();
            
            expect(scope.updateAuthorData).toHaveBeenCalledWith(oneAuthorData);
            expect(scope.message).toBeDefined();
            expect(scope.showRemoveAuthorData).toEqual(false);
            expect(scope.showForm).toBeTruthy();
            expect(scope.IsAuthorUpdatedRemoved).toBeTruthy();
            
        });
        
    
    }); /*END OF DESRIBE OF PUT REQUEST updateAuthorData() function */
    
    
    /*DELETE REQUEST TO DELETE SINGLE BOOK*/
    
    describe('update Existing book Using PUT request : deleteAuthorData() function',function(){
        
        var response = {
            
                "message" : "AUTHOR DELETED"
        };
        
        var empID = 555;
        
        beforeEach(function(){
           
            spyOn(scope,'deleteAuthorData').and.callThrough();
            
        });
        
        it('SHOULD DELETE SINGLE BOOK DATA',function(){
            $httpBackend.whenDELETE("http://172.27.12.104:3000/author/remove").respond(200,$q.when(response));
            
            expect(scope.deleteAuthorData).not.toHaveBeenCalled();
            expect(scope.showRemoveAuthorData).toBeFalsy();
            expect(scope.IsAuthorUpdatedRemoved).toBeFalsy();
            expect(scope.message).not.toBeDefined();
            expect(scope.showForm).toBeFalsy();
            
            scope.deleteAuthorData(empID);
            
            $httpBackend.flush();
            
            expect(scope.deleteAuthorData).toHaveBeenCalledWith(empID);
            expect(scope.message).toBeDefined();
            expect(scope.showRemoveAuthorData).toEqual(false);
            expect(scope.showForm).toBeTruthy();
            expect(scope.IsAuthorUpdatedRemoved).toBeTruthy();
            
        });
        
    
    }); /*END OF DESRIBE OF DELETE REQUEST deleteAuthorData() function */
    
    
});

