module.exports = function (grunt) {
    grunt.initConfig({
      =    concat: {
        js: {
                  src: ['rectangle.js', 'calc.js'],
            dest: 'dist/bundle.js'
            
        }
                
      }
        
    });

      grunt.loadNpmTasks('grunt-contrib-concat');

        grunt.registerTask('default', ['concat']);

};
