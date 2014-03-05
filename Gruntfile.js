module.exports = function (grunt)
{
  grunt.initConfig({
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: '_site'
        }
      }
    },
    watch: {
      livereload: {
        files: [
          '_config.yml',
          'index.html',
          '_layouts/**',
          '_posts/**',
          '_includes/**'
        ],
        tasks: ['shell:jekyllBuild'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },
    clean: {
      site: '_site'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', ['clean', 'shell', 'connect', 'watch']);
}