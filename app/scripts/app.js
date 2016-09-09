'use strict';


angular.module('mainApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

      /*route for the Main Pagw*/
    .state('app',{

      url:'/',
      views:{

        'header':{
            templateUrl: 'views/header.html' /*header view*/
        },
        'content':{

          templateUrl:'views/content.html',
          controller:'bookController'
        },
        'footer':{ 
          templateUrl:'views/footer.html'  /*footer view*/
        }

      }

    })

    /*Add New Book*/

    .state('app.newBook', {
                url:'newBook',
                views: {
                    'content@': {
                        templateUrl: 'views/newBook.html',
                        controller:'bookController'
                   }
                }
            })

    /*Add new Author*/
    .state('app.newAuthor', {
                url:'newAuthor',
                views: {
                    'content@': {
                        templateUrl: 'views/newAuthor.html',
                        controller:'authController'
                   }
                }
            })
  
    /*route for book details*/
  
    .state('app.bookDetails',{
      
            url:'bookDetails/:id',
            views:{
                
                'content@': {
                    
                    templateUrl :'views/bookDetails.html',
                    controller:'bookController'
                    }
                
                }

            })
  
    /*route for author details*/
  
    .state('app.authDetails',{
      
            url:'authDetails/:id',
            views:{
                
                'content@': {
                    
                    templateUrl :'views/authDetails.html',
                    controller:'authController'
                    }
                
                }

            });

    $urlRouterProvider.otherwise('/');

});        


