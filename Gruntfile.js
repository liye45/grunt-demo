module.exports = function (grunt) {
    grunt.initConfig({
      =    imagemin: {                               
        files: {
                  expand: true,
            src: ['images/*.{png,jpg,gif}'],
                                   dest: 'dist/'
                                         
        }
            }
              
    });

      grunt.loadNpmTasks('grunt-contrib-imagemin');

        grunt.registerTask('default', ['imagemin']);    

};
