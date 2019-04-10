// https://github.com/Nikku/karma-browserify
module.exports = function (config) {
  config.set({
    files: [
      {
        pattern: 'scss/**/*.scss',
        watched: true,
        included: false,
        served: true
      },
      'test/unit-sass.css'
    ],
    preprocessors: {
      'scss/**/*.scss': ['sass']
    },
    //acabou nao rolando
    sassPreprocessor: {
      source: 'scss/*.scss',
      createSourceMaps: true,
      outputDir:  __dirname + '/test/',
      outputFile: 'unit-sass.css'
    }
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'jasmine'],
    files: ['test/unit/**/*.js'],
    reporters: ['spec'],
    preprocessors: {
      'test/unit/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      plugin: [require('proxyquireify').plugin]
    },
    singleRun: true
  })
}
