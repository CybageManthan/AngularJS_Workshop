/*KARMA CONFIGURATION FILE*/

module.exports = function(config) {
    
    config.set({
       
            //BASE PATH THAT WILL USE TO RESOLVE ALL THE PATH
            
            basePath:'../',
        
            /*TESTING FRAMEWORK YOU WANT TO USE */
            frameworks : ['jasmine'],
        
            
            files : [
                
                'bower_components/angular/angular.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'app/scripts/*.js',
                'app/services/*.js',
                'app/controllers/*.js',
                'test/unit-test/**/*.js'
            ],
        
            exclude: [],
        
            preprocessors: {},
        
            /*REPORTER PLUGINS AVAILABLE> SHOWS THE OUTPUT IN PROPER FORMAT*/
            reporters : ['spec'],
        
            /*PORT ON WHICH YOU WANT TO RUN*/
            port:7896,
        
            /*OUTPUT SHOULD BE IN COLRS*/
            colors:true,
        
            logLevel: config.LOG_INFO,
            
            /*AUTO WATCH FOR THE CHANGE OF THE FILES*/
            autoWatch:true,
        
            /*BROWSER LIST ON WHICH YOU WANT TO TEST*/
            browsers:['Chrome'],
        
            /*CONTINEOUS INTEGRATION MODE*/
            singleRun:false,
        
            /*HOW MANY BROWSER SHOULD BE STARTED SIMULTANEOUSLY*/
            concurrencty:Infinity
        
        
    });
    
}