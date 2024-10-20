const { watch } = require('fs');
const { loadNpmTasks, initConfig, registerTask } = require('grunt');
const { default: dist } = require('typescript-eslint');

module.exports = function(grunt) {
  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');  // Load the watch plugin

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          implementation: require('sass') // Use Dart Sass (Node version)
        },
        files: {
          './public/css/styles.css': './src/styles/styles.scss' // Destination: Source
        }
      }
    },
    watch: {
      sass: {
        files: './src/styles/**/*.scss',  // Watch all SCSS files in the styles folder
        tasks: ['sass'],  // Run the 'sass' task whenever a file changes
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['sass']);
};

