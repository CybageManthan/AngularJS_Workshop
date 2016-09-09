/*APP.JS FILE DEFINES THE ROUTES FOR THE ENTIRE APPLICATION*/

'use strict';


angular.module('mainApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    /*ROUTE FOR THE MAIN PAGE*/
  
    .state('app',{

      url:'/',
      views:{

        'header':{
            templateUrl: 'views/header.html' /*HEADER VIEW*/
        },
        'content':{

          templateUrl:'views/content.html', /*MAIN CONTENT*/
          controller:'bookController'
        },
        'footer':{ 
          templateUrl:'views/footer.html'  /*FOOTER VIEW*/
        }

      }

    })

    /*ROUTE FOR THE NEWBOOK VIEW*/

    .state('app.newBook', {
                url:'newBook',
                views: {
                    'content@': {
                        templateUrl: 'views/newBook.html',
                        controller:'bookController'
                   }
                }
            })

    /*ROUTE FOR THE NEWAUTHOR VIEW*/
  
    .state('app.newAuthor', {
                url:'newAuthor',
                views: {
                    'content@': {
                        templateUrl: 'views/newAuthor.html',
                        controller:'authController'
                   }
                }
            })
  
    /*ROUTE FOR THE BOOKDETAILS VIEW */
  
    .state('app.bookDetails',{
      
            url:'bookDetails/:id',
            views:{
                
                'content@': {
                    
                    templateUrl :'views/bookDetails.html',
                    controller:'bookController'
                    }
                
                }

            })
  
    /*ROUTE FOR THE AUTHORDETAILS VIEW */
  
    .state('app.authDetails',{
      
            url:'authDetails/:id',
            views:{
                
                'content@': {
                    
                    templateUrl :'views/authDetails.html',
                    controller:'authController'
                    }
                
                }

            });

    $urlRouterProvider.otherwise('/'); /*DEFAULT VIEW*/

});        


