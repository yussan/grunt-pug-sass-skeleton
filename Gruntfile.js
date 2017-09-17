module.exports = grunt => {
  grunt.initConfig({
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: [{
          src: '*.pug',
          cwd: 'src/pug/',
          dest: 'dist',
          expand: true,
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'inline'
        },
        files: [{
          src: '*.sass',
          cwd: 'src/sass/',
          dest: 'dist/css',
          expand: true,
          ext: '.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/app.min.js': ['src/js/app.js']
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
            src : [
                'dist/**.*'
            ]
        },
        options: {
            watchTask: true,
            server: './dist'
        }
    }
    },
    watch: {
      pug: {
        files: ['src/pug/**/*.pug'],
        tasks: ['pug']
      },
      sass: {
        files: ['src/sass/**/*.sass'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // initial
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  

  //register default task
  grunt.registerTask('default', ['pug', 'sass', 'uglify', 'browserSync', 'watch'])
};

