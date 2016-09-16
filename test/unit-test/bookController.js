/*WRITE YOUR TEST CASES IN THIS FILE USING JASMIN DESCRIBE,TEST AND IT */
/*THIS FILE CONTAINS THE TEST CASES FOR THE BOOKCONTROLLER and BOOKFACTORY */

describe('Controller: bookController',function(){
   
    /*LOAD THE MODULE USING BEFOREEACH FUNCTION*/
    
    beforeEach(angular.mock.module('mainApp'));
    beforeEach(angular.mock.module('ui.router'));
    
    var bookController,scope,$httpBackend,bookFactory;
    
    /*INJECT MOCK DATA AND MOCK REQUEST THAT YOUR APPLICATION WILL GOING TO ASSERT*/
    
    beforeEach(inject(function(_$controller_,_$httpBackend_,_$q_,$rootScope,$stateParams,_bookFactory_){
        
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        bookFactory = _bookFactory_;
        $q = _$q_;
        
        $httpBackend.expectGET("http://172.27.12.104:3000/book/list").respond(200);
        $httpBackend.expectPOST("http://172.27.12.104:3000/book/byisbn").respond(200);
        $httpBackend.expectGET("views/header.html").respond(200);
        $httpBackend.expectGET("views/content.html").respond(200);
        $httpBackend.expectGET("views/footer.html").respond(200);
        
        
        /*CREATING A SCOPE VARIBLE FOR OUR CONTROLLER*/
        scope = $rootScope.$new();
        
        /*INITALIZE THE CONTROLLER*/
        
        bookController = $controller('bookController',{
           
            $scope:scope, bookFactory: bookFactory , $stateParams : $stateParams
            
        });
        
        
        
    })); /* END OF MOCKUP*/
    
    /*------------------------------- NOW CREATE YOUR TEST CASES----------------*/
    
    it('bookController should be defined',function(){
        
       expect(bookController).toBeDefined(); 
        
    });
    
    /*CHECK ALL CONTROLLER'S FUNCTION */
    
    describe('Check all controller function defined or not',function() {
        
        it('addNewBook function defined',function(){
           
            expect(scope.addNewBook).toBeDefined();
            
        });

        it('editBookData function should defined',function(){
           
            expect(scope.addNewBook).toBeDefined();
            expect(scope.showBookForm).toBeFalsy();
            
            /*CALL THE FUNCTION TO SEE THE CHANGE*/
            
            scope.editBookData();
            expect(scope.showBookForm).toBeTruthy();
            
        });
              
        it('updateBookData function should defined',function(){
           
            expect(scope.updateBookData).toBeDefined();
            
        });
        
        it('deleteBookData function should defined',function(){
           
            expect(scope.deleteBookData).toBeDefined();
            
        });
        
        
        
    }); /*--------- END OF DESCRIBE -------------------------*/
    
    
    it('books object should be defined and value [] array',function(){
       
        expect(scope.books).toBeDefined();
        expect(scope.books).toEqual([]);
        
    });
    
    /*TEST FOR FACTORY OBJECT*/
    
    it('bookFactory should exist',function(){
       
        expect(bookFactory).toBeDefined();
        expect(bookFactory.getBooks).toBeDefined();
        
    });
    
    /*GET REQUEST TO FETCH ALL THE BOOKS*/
    
    describe('Get books using GET request : getBooks() function',function(){
       
        var SUCESS_RESPONSE = [
            {
                "_id": "57d140611dda260c54a5735e",
                "isbn": "ISN-234-34535",
                "title": "TestBook",
                "author": "Manthan",
                "price": 2000,
                "availableOn": [
                  "flipkart,snapdeal"
                ]
            },
            {
               "_id": "57d10f80aeed8542a847c868",
                "isbn": "ISBN-243-4356-812",
                "title": "Delivery Management 2",
                "author": "Kumar Kundan",
                "price": 750,
                "availableOn": [
                  "Amazon",
                  "Flipkart"
                ] 
            }
        ];
        
        
        beforeEach(function(){
           
            spyOn(bookFactory,'getBooks').and.callThrough();
            
        });
        
        it('Should return books and Store into the books object',function(){
           
            $httpBackend.whenGET("http://172.27.12.104:3000/book/list").respond(200,$q.when(SUCESS_RESPONSE));
            
            expect(bookFactory.getBooks).not.toHaveBeenCalled();
            expect(scope.books).toEqual([]);
            
            bookFactory.getBooks().then(function(response){
               
                scope.books = response;
                
            });
            
            $httpBackend.flush();
            
            expect(bookFactory.getBooks).toHaveBeenCalled();
            expect(scope.books).toBeDefined();
            expect(scope.books.length).not.toBe(0);
            
            
        });
        
    
    }); /*END OF GET REQUEST DESRIBE FUNCTION*/
    
    
    /*POST REQUEST TO FETCH SINGLE BOOK*/
    
    describe('Get book using POST request : getBook() function',function(){
       
        var oneBookData = {
                "_id": "57d140611dda260c54a5735e",
                "isbn": "ISN-234-34535",
                "title": "TestBook",
                "author": "Manthan",
                "price": 2000,
                "availableOn": [
                  "flipkart,snapdeal"
                ]
            };
           
        
        
        beforeEach(function(){
           
            spyOn(bookFactory,'getBook').and.callThrough();
            
        });
        
        it('Should return ONE BOOK Object and store it in book ',function(){
           
            var searchTerm = 'ISN-234-34535';
            $httpBackend.whenPOST("http://172.27.12.104:3000/book/byisbn").respond(200,$q.when(oneBookData));
            
            expect(bookFactory.getBook).not.toHaveBeenCalled();
            expect(scope.showRemoveBookData).toBeFalsy();
            expect(scope.book).toEqual(undefined);
            
            bookFactory.getBook(searchTerm).then(function(response){
               
                scope.book = response;
                
            });
            
            $httpBackend.flush();
            
            expect(bookFactory.getBook).toHaveBeenCalledWith(searchTerm);
            expect(scope.book).toBeDefined();
            expect(scope.showRemoveBookData).toBeTruthy();
            expect(scope.book.author).toEqual('Manthan');
            expect(scope.book.price).toEqual(2000);
            
            
        });
        
     
    });  /* END OF POST REQUEST DESRIBE FUNCTION */
    
    
     /*POST REQUEST TO FETCH SINGLE BOOK*/
    
    describe('create newBook using POST Request : addNewBook() function',function(){
       
        var oneBookData = {
                "_id": "57d140611dda260c54a5735e",
                "isbn": "ISN-234-34535",
                "title": "TestBook",
                "author": "Manthan",
                "price": 2000,
                "availableOn": [
                  "flipkart,snapdeal"
                ]
            };
        
        var response = {
            
                "message" : "BOOK CREATED"
        };
        
        
        beforeEach(function(){
           
            spyOn(scope,'addNewBook').and.callThrough();
            
        });
        
        it('SHOULD CREATE SINGLE BOOK ',function(){
            $httpBackend.whenPOST("http://172.27.12.104:3000/book/new").respond(200,$q.when(response));
            
            expect(scope.addNewBook).not.toHaveBeenCalled();
            expect(scope.showRemoveBookData).toBeFalsy();
            expect(scope.message).not.toBeDefined();
            expect(scope.IsBookAdded).toBeFalsy();
            
            scope.addNewBook(oneBookData);
            
            $httpBackend.flush();
            
            expect(scope.addNewBook).toHaveBeenCalledWith(oneBookData);
            expect(scope.message).toBeDefined();
            expect(scope.IsBookAdded).toBeTruthy();
            
        });
        
    
    }); /*END OF DESRIBE OF POST REQUEST addNewBook() function */
    
    
    /*PUT REQUEST TO UPDATE SINGLE BOOK*/
    
    describe('update Existing book Using PUT request : updateBookData() function',function(){
       
        var oneBookData = {
                "_id": "57d140611dda260c54a5735e",
                "isbn": "ISN-234-34535",
                "title": "TestBook",
                "author": "Manthan",
                "price": 2000,
                "availableOn": [
                  "flipkart,snapdeal"
                ]
            };
        
        var response = {
            
                "message" : "BOOK UPDATED"
        };
        
        
        beforeEach(function(){
           
            spyOn(scope,'updateBookData').and.callThrough();
            
        });
        
        it('SHOULD UPDATE A SINGLE BOOK DATA',function(){
            $httpBackend.whenPUT("http://172.27.12.104:3000/book/update").respond(200,$q.when(response));
            
            expect(scope.updateBookData).not.toHaveBeenCalled();
            expect(scope.showRemoveBookData).toBeFalsy();
            expect(scope.IsBookUpdatedRemoved).toBeFalsy();
            expect(scope.message).not.toBeDefined();
            expect(scope.showBookForm).toBeFalsy();
            
            scope.updateBookData(oneBookData);
            
            $httpBackend.flush();
            
            expect(scope.updateBookData).toHaveBeenCalledWith(oneBookData);
            expect(scope.message).toBeDefined();
            expect(scope.showRemoveBookData).toEqual(false);
            expect(scope.showBookForm).toBeTruthy();
            expect(scope.IsBookUpdatedRemoved).toBeTruthy();
            
        });
        
    
    }); /*END OF DESRIBE OF PUT REQUEST updateBookData() function */
    
    
    /*DELETE REQUEST TO DELETE SINGLE BOOK*/
    
    describe('update Existing book Using PUT request : deleteBookData() function',function(){
        
        var response = {
            
                "message" : "BOOK DELETED"
        };
        
        var isbnID = 'ISN-234-34535';
        
        beforeEach(function(){
           
            spyOn(scope,'deleteBookData').and.callThrough();
            
        });
        
        it('SHOULD DELETE SINGLE BOOK DATA',function(){
            $httpBackend.whenDELETE("http://172.27.12.104:3000/book/remove").respond(200,$q.when(response));
            
            expect(scope.deleteBookData).not.toHaveBeenCalled();
            expect(scope.showRemoveBookData).toBeFalsy();
            expect(scope.IsBookUpdatedRemoved).toBeFalsy();
            expect(scope.message).not.toBeDefined();
            expect(scope.showBookForm).toBeFalsy();
            
            scope.deleteBookData(isbnID);
            
            $httpBackend.flush();
            
            expect(scope.deleteBookData).toHaveBeenCalledWith(isbnID);
            expect(scope.message).toBeDefined();
            expect(scope.showRemoveBookData).toEqual(false);
            expect(scope.showBookForm).toBeTruthy();
            expect(scope.IsBookUpdatedRemoved).toBeTruthy();
            
        });
        
    
    }); /*END OF DESRIBE OF DELETE REQUEST deleteBookData() function */
    
    
});

