const { src, dest, task, series, watch } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass')(require('node-sass'));
const concat = require('gulp-concat');

task( 'clean', () => {
    return src( 'dist/**/*', {read: false}).pipe(rm())
});

task('copy', () => {
    return src('src/**/*.scss').pipe(dest('dist'))
});


const styles = [
    "node_modules/normalize.css/normalize.css",
    "src/scss/main.scss"
]

task('styles', () => {
    return src(styles)
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'))
});
watch('./src/**/*.scss', series('styles'))
task('default', series('clean', 'styles'))