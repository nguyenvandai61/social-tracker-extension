import path from 'path'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber';
import args from './libs/args'
import livereload from 'gulp-livereload'
import named from 'vinyl-named';
import webpack, { web } from 'webpack';
import gulpWebpack from 'webpack-stream';

const CURRENT_WORKING_DIR = process.cwd();
const ENV = args.production? 'production' : 'development'

gulp.task('scripts', () => {
    return gulp.src('app/scripts/*.js')
    .pipe(plumber({
        // Webpack will log the errors
        errorHandler() {}
    }))
    .pipe(gulpWebpack({
        mode: ENV,
        watch: args.watch,
        entry: {
            popup: './app/scripts/popup.js',
            background: './app/scripts/background.js',
            contentscript: './app/scripts/contentscript.js'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(ENV)
            })
        ].concat(args.production? [
            new webpack.optimize.UglifyJsPlugin()
        ]: []),
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }]
        },
        output: {
            path: path.join(CURRENT_WORKING_DIR, 'dist/scripts'),
            filename: '[name].js',
        }
      },
      webpack
    ))
    .pipe(gulp.dest(`dist/scripts`))
    .pipe(gulpif(args.watch, livereload()));
})