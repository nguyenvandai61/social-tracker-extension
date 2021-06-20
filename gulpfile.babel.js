import requireDir from 'require-dir'

console.log('gulp run')
requireDir('./tasks', {recurse: true})