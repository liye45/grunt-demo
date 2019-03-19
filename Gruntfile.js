module.exports = function (grunt) {
  grunt.initConfig({
        cssmin: {  
              'rectangle.min.css': 'rectangle.css'
            }
                  
  });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', ['cssmin']); 

};
