var gulp = require('gulp');
minifycss = require('gulp-minify-css');
jshint = require('gulp-jshint');
stylish = require('jshint-stylish');
uglify = require('gulp-uglify');
usemin = require('gulp-usemin');
rename = require('gulp-rename');
concat = require('gulp-concat');
notify = require('gulp-notify');
cache = require('gulp-cache');
changed = require('gulp-changed');
rev = require('gulp-rev');
browserSync = require('browser-sync');
del = require('del');


//JSHINT

gulp.task('jshint',function(){
    
   return gulp.src('app/**/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter(stylish));
    
});


//CLEAN

gulp.task('clean',function() {
    
   return del(['dist']);
    
});

//DEFAULT TASK

gulp.task('default',['clean'],function(){
    
   gulp.start('usemin','copyfonts','copyviews');
    
});


//USEMIN TASK

gulp.task('usemin',['jshint'],function(){
   
    return gulp.src('./app/index.html')
    .pipe(usemin({
        
        css: [minifycss(),rev()],
        js:  [uglify(),rev()]
        
    }))
    .pipe(gulp.dest('dist/'));
    
});


//COPYFONTS TASK

gulp.task('copyfonts',['clean'],function(){
   
    gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('./dist/fonts'));
    
    gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('./dist/fonts'));
    
});

//COPY VIEWS

gulp.task('copyviews',['clean'],function(){
    
   gulp.src('app/views/**/*.html')
   .pipe(gulp.dest('./dist/views'));
    
});


//WATCH

gulp.task('watch',['browser-sync'],function(){
    
   gulp.watch('{app/**/*.js,app/styles/**/*.css,app/**/*.html}',['usemin'])
    
});


gulp.task('browser-sync',['default'],function(){
   
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/**/*.js',
        'dist/**/*'
    ];
    
    browserSync.init(files,{
        
        server: {
            
            baseDir: "dist",
            index: "index.html"
            
        }
    });
    
  /*WATCH ANY FILE IN DIST FOLDER AND RELOAD THE PAGE */
  gulp.watch(['dist/**']).on('change',browserSync.reload);    
    
});