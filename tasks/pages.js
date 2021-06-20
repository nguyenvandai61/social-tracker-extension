import gulp from 'gulp'
import gulpif from 'gulp-if'
import args from './libs/args'
import livereload from 'gulp-livereload'


gulp.task('pages', () => {
    return gulp.src('app/pages/**/*.html')
        .pipe(gulp.dest(`dist/pages`))
        .pipe(gulpif(args.watch, livereload()))
})