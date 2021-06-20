import gulp from 'gulp'


gulp.task('build', gulp.series('clean',
    gulp.parallel('manifest', 'pages')
));
