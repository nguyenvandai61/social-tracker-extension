import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './libs/args';

gulp.task('manifest', () => {
    console.log(args.watch);
    return gulp.src('app/manifest.json')
        .pipe(gulp.dest(`dist/`))
        .pipe(gulpif(args.watch, livereload()))
})