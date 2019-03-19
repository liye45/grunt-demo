module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
                    'js/jquery.min.js': 'js/jquery.js'
            
        }
                     
      }       
                  
    }
              
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['uglify:release']);

};
