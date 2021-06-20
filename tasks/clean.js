import gulp from 'gulp'
import del from 'del'


gulp.task('clean', (cb) => {
    console.log('clean')
    return del(`dist/**/*`, cb)
})