# AngularJS_Workshop

###THIS APPLICATION DEMONSTRATE THE USAGE OF

*. Angular
    i.SPA.
    ii.Angular Routing,Angular 2 way Binding, Factories,controller,filters.
    iii. $http,$q services of Angular.
*. Bower
*. Bootstrap and Font-Awesome
*. Testing Framework
    i. Jasmine and Karma
*. Task Runnner
    i. Gulp
    
*. app folder have all the code of application.
   1. services dir : factories implement.
   2. controllers dir: controller logic.
   3. views dir : all the views
   4. script dir : js files

*. dist folder is the folder use for production and running the application . 
   
   i. gulp will create the dist folder.

*. test folder have karma configuratio file and test-suits in unit-test folder for
    
   i. bookcontroller and bookfactory
   ii. authorcontroller and authorfactory

*. bower_components have front-end dependencies.

*. once you run npm install command it will create node_modules folder. (read Q/A below)

*. run gulp watch command from rootDir to start the application.

*. To test the application go to test directory and run karma start karma.conf.js   		


Q. **To Start the Application**

A: Go to the Root directory and run gulp watch command.

    requirements to run the above command:

    i. This are the things that need to be installed for Gulp run.
        npm install gulp -g
        npm install gulp --save-dev (local)
            all gulp plugin defined package.json 
            use this package.json file to install all dependencies 
            command: npm install
            command: bower install (similar for bower components)
        

Q. To Test the Application using Karma and Jasmine

A. Go to Test folder and run command : karma start karma.conf.js

    requirements:
    
    command : npm install will install necessary module for the Karma and Jasmine.
    
    !important : Do not change the package.json and bower.json file.    
