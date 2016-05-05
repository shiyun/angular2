import gulp from 'gulp'
//import ts from 'gulp-typescript'
import watch from 'gulp-watch'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import livereload from 'gulp-livereload'
import rename from 'gulp-rename'
import del from 'del'
import size from 'gulp-size'

//const tsConfig = ts.createProject('../tsconfig.json');
//const tsfile = '../app/**/*.ts';

const PATHS = {
    src: {
        js: '../dist/**/*.js',
        html: '../dist/**/*.html'
    },
    libs: [
		/*
        '../node_modules/es6-shim/es6-shim.min.js',
        '../node_modules/systemjs/dist/system-polyfills.js',
        '../node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        '../node_modules/angular2/bundles/angular2-polyfills.js',
        '../node_modules/systemjs/dist/system.src.js',
        '../node_modules/typescript/lib/typescript.js',
        '../node_modules/rxjs/bundles/Rx.js',
        '../node_modules/angular2/bundles/angular2.dev.js',
        '../node_modules/angular2/bundles/router.dev.js',
        '../node_modules/zone.js/dist/zone.min.js'
		*/
		'node_modules/angular2/bundles/js',
		'node_modules/angular2/bundles/angular2.*.js*',
		'node_modules/angular2/bundles/angular2-polyfills.js',
		'node_modules/angular2/bundles/http.*.js*',
		'node_modules/angular2/bundles/router.*.js*',
		'node_modules/es6-shim/es6-shim.min.js*',
		'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
		'node_modules/systemjs/dist/*.*',
		'node_modules/jquery/dist/jquery.*js',
		'node_modules/bootstrap/dist/js/bootstrap*.js',
		'node_modules/rxjs/bundles/Rx.js'
    ]
};

//移动libs
gulp.task('move', ()=>{
	gulp.src(PATHS.libs)		
		.pipe(gulp.dest('../public/js'))
});

//压缩libs
gulp.task('libs', ['move'], ()=>{
	gulp.src('../dist/move/*.js')
		.pipe(uglify())
		.pipe(size({
			showFiles: true,
			showTotal: true,
			gzip: true
		}))		
		.pipe(concat('libs.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../dist/libs'))
});

////编译typescript
//gulp.task('tsc', ()=>{
//	gulp.src(tsfile)
//		.pipe(ts(tsConfig))
//		.pipe(gulp.dest('../dist/ts'))
//});

////自动重启
//gulp.task('tsc:w', ['tsc'], ()=>{
//	gulp.watch(tsfile, ['tsc']);
//});

//压缩前删除原来文件夹里的内容
gulp.task('clean', function(cb){
	del(['../dist/**/*.*'], cb);
});


// 默认任务
gulp.task('default', function(){
	gulp.run('clean', 'move');
//    gulp.watch('../src/**/*.*', function(){
//        gulp.run('libs', 'util', 'comps', 'less', 'images');
//    });
//	gulp.watch(tsfile, ['tsc']);
});

