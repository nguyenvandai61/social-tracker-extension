import gulp from 'gulp'
import del from 'del'


gulp.task('clean', (cb) => {
    console.log('clean')
    return del(`dist/**/*`, cb)
})

gulp.task('manifest', () => {
    console.log('hello');
    return gulp.src('app/manifest.json')
        .pipe(gulp.dest(`dist/`));
})

gulp.task('build', gulp.series('clean',gulp.parallel('manifest')));

gulp.task('default', 
    // gulp.series('build')
    gulp.series('build')
)