import gulp from 'gulp'

gulp.task('manifest', () => {
    console.log('hello');
    return gulp.src('app/manifest.json')
        .pipe(gulp.dest(`dist/`));
})