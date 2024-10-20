// Import necessary modules
const { task, src, dest, watch, series } = require('gulp'); // Gulp functions
const sass = require('gulp-dart-sass');

// Define the 'sass' task
task('sass', function() {
  return src('./src/styles/**/*.scss') // Source SCSS files (fixing the double slash)
    .pipe(sass().on('error', sass.logError)) // Compile Sass and handle errors
    .pipe(dest('./public/css')); // Output compiled CSS to destination folder
});

// Define the 'watch' task
task('watch', function() {
  watch('./src/styles/**/*.scss', series('sass')); // Watch for changes and run 'sass' task
});
