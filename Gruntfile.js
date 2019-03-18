                    
module.exports = function (grunt) {
  =  grunt.initConfig({
    mocha: {
      test: {
                src: ['test/index.html'],
        
      },
  options: {
            run: true,
          reporter: 'Dot'
          
  }
      
    }
             
  });

    grunt.loadNpmTasks('grunt-mocha');

      grunt.registerTask('default', ['mocha']);

};
