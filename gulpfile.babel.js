import gulp from 'gulp'
import './tasks/manifest'
import './tasks/clean'
import './tasks/pages'
import './tasks/scripts'

import './tasks/build'

gulp.task('default', 
    // gulp.series('build')
    gulp.series('build')
)
