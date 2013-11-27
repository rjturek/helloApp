basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'helloApp/lib/angular/angular.js',
  'helloApp/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'helloApp/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
