module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'src/js/*.js'         
                ],
                dest: 'dest/js/build/production.js',
            }
        },
        
        uglify: {
            build: {
                src: 'dest/js/build/production.js',
                dest: 'dest/js/build/production.min.js'
            }
    },

        sass: {
            dist: {
                files: [{
                  expand: true,
                  cwd: 'src/scss',
                  src: ['*.scss'],
                  dest: 'src/css',
                  ext: '.css'
                }]
        }
      },
        cssmin: { 
            with_banner: {
                options: {
                    banner: '/*minified CSS*/'  
                },
 
                files: {
                    'dest/css/style.min.css' : ['src/css/*.css']  
                }
            }
        },
        watch: {
            sass: {
                files: ['src/scss/*.scss'], 
                tasks: ['sass'], 
            },
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/css/*.css'], 
                tasks: ['cssmin'], 
                options: {
                    spawn: false
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat','uglify','sass','cssmin']);

};