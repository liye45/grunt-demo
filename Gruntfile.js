module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
                configFile: '.eslintrc.json'
          
      },
        target: ['*.js']
        
    }
              
  });

    grunt.loadNpmTasks('grunt-eslint');

      grunt.registerTask('default', ['eslint']);

};
