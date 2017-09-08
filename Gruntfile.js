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
        files: ['src/pug/**.pug'],
        tasks: ['pug']
      },
      sass: {
        files: ['src/sass/**.sass'],
        tasks: ['sass']
      }      
    }
  });

  // initial
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  

  //register default task
  grunt.registerTask('default', ['pug', 'sass', 'browserSync', 'watch'])
};

