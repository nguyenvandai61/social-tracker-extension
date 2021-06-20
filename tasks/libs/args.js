import yargs from 'yargs'

const args = yargs
    .option('production', {
        boolean: true,
        default: false,
        describe: 'Minify all scripts and assets'
    })

    .option('watch', {
        boolean: true,
        // type: 'boolean',
        default: false,
        describe: 'Watch all files and start a livereload server'
    })
    .argv
console.log(args.watch)
export default args;