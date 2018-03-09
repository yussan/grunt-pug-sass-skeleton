module.exports = grunt => {
  grunt.initConfig({
    // pug task
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: [{
          src: '[^_]*.pug',
          cwd: 'src/pug/',
          dest: 'dist',
          expand: true,
          ext: '.html'
        }]
      }
    },

    // sass task
    sass: {
      dist: {
        options: {
          style: 'inline'
        },
        files: [{
          src: '[^_]*.sass',
          cwd: 'src/sass/',
          dest: 'dist/css',
          expand: true,
          ext: '.css'
        }]
      }
    },

    // copy task (copy src/libraries to dist/libraries)
    copy: {
      library: {
        expand: true,
        cwd: 'src',
        src: ['libraries/**'],
        dest: 'dist/'
      },
      public: {
        expand: true,
        cwd: 'src/public',
        src: ['**'],
        dest: 'dist'
      }
    },

    // image compress task (compress all image src/images to dist/images)
    imagemin : {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'src/',
              src: ['images/**/*.{png,jpg,gif}'],
              dest: 'dist'
          }]
      }
    },

    //minify css (only tun in production)
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    // auto refresh view on change in dist directory
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

    // watch change inside directory to run task
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
        tasks: ['babel']
      },
      babel: {
         files: ['src/js/**/*.js'],
         tasks: ['babel']
       },
      copy: {
        files: ['src/libraries/**', 'src/public/**'],
        tasks: ['copy']
      },
      imagemin: {
        files: ['src/images/**'],
        tasks: ['imagemin']
      }
    },

    // babel
    babel: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'dist/js/app.js': 'src/js/app.js'
        }
      }
    }
  });

  // initial
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');

  //register default task
  if(process.env.NODE_ENV == 'production')
  {
    grunt.registerTask('default', ['pug', 'sass', 'copy', 'imagemin', 'cssmin', 'babel'])
  }else 
  {
    grunt.registerTask('default', ['pug', 'sass', 'copy', 'imagemin', 'browserSync', 'babel', 'watch'])
  }
};

