# AngularJS_Workshop

###THIS APPLICATION DEMONSTRATE THE USAGE OF

* Angular
    *  SPA.
    *  Angular Routing,Angular1 - 2 WayBinding, Factories,controller,filters.
    *  $http Service
    *  Angular Services - Factory,Providers
* Bower
* Bootstrap and Font-Awesome
* Testing Framework
    * **Jasmine and Karma**
* Task Runnner
   * **Gulp**
    
* **app** folder have all the code of application.
  * **services** dir : factories implement.
  * **controllers** dir: controller logic.
  * **views** dir : all the views
  * **script** dir : js files

* dist folder is the folder use for production and running the application . 
   
   *  **gulp** will create the **dist** folder.

* test folder have karma configuratio file and test-suits in unit-test folder for
    
   *  bookcontroller and bookfactory
   *  authorcontroller and authorfactory

* bower_components have front-end dependencies.

* once you run npm install command it will create node_modules folder. (read Q/A below)

* run gulp watch command from rootDir to start the application.

* To test the application go to test directory and run karma start karma.conf.js   		


Q. **To Start the Application**

A: Go to the Root directory and run gulp watch command.

    requirements to run the above command:

    i. Below are the things that need to be installed for Gulp to run.
        npm install gulp -g
        npm install gulp --save-dev (local)
            all gulp plugin defined in package.json 
            use this package.json file to install all dependencies 
            command: run  **npm install** from root directory
        

Q. **To Test the Application using Karma and Jasmine**

A. Go to Test folder and run command : karma start karma.conf.js

    requirements:
    npm install karma-cli -g
    command : npm install will install necessary module for the Karma and Jasmine.
    

**!important : Do not change the package.json and bower.json file. **
