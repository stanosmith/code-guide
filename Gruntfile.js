// Thanks to kctang for this setup:
// http://kctang.github.io/jekyll/livereload/2014/01/25/github-pages-with-jekyll-and-livereload.html/
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
        port: 9090,
        // Change to your IP if on proxy
        hostname: 'localhost',
        livereload: 45729
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
          '_includes/**',
          '_layouts/**',
          '_posts/**',
          '_config.yml',
          'index.html'
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