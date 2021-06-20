import gulp from 'gulp'

gulp.task('test', (done) =>{
    console.log('sdfsdf');
    gulp.src(['app/manifest.json'])
        .pipe(gulp.dest('dist/'));
    done();
})