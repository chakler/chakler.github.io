module.exports = function(grunt) {

  const sass = require('node-sass');

  // Project configuration.
  grunt.initConfig({

    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          '_sass/main.css': '_sass/main.scss',
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          }),
          require('cssnano')(),
        ]
      },
      dist: {
        src: '_sass/main.css',
        dest: 'assets/css/main.css'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some',
        mangle: {
          except: [
            'js/dev/plugins.js'
          ]
        }
      },
      build: {
        files: {
          'js/main.min.js': ['js/dev/plugins.js', 'js/dev/main.js']
        }
      }
    },

    watch: {
      sasscss: {
        files: ['_sass/*.scss', '_sass/*/*.scss'],
        tasks: ['sass', 'postcss', 'notify:sass'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['js/dev/main.js','js/dev/plugins.js'],
        tasks: ['uglify', 'notify:js'],
        options: {
          spawn: false
        }
      }
    },

    notify: {
      sass: {
        options: {
          title: 'Stylesheets are ready!',
          message: 'Your sass files are successfully compiled.'
        }
      },
      js: {
        options: {
          title: 'Scripts are now very ugly!',
          message: 'Your js files are successfully uglified.'
        }
      }
    }

  }); 

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['watch']);

};