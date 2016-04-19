
module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        port: 9876,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],
        files: [
            // paths loaded by Karma
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},

            {pattern: 'karma-test-shim.js', included: true, watched: true},
            
            // paths loaded via module imports
            {pattern: 'app/*.js', included: false, watched: true},
            {pattern: 'test/*.js', included: false, watched: true},
            
            // paths to support debugging with source maps in dev tools
            {pattern: 'app/*.js.map', included: false, watched: false},
            {pattern: 'test/*.js.map', included: false, watched: false},
            {pattern: 'app/*.ts', included: false, watched: false},
            {pattern: 'test/*.ts', included: false, watched: false}
        ]
    });
};
