const { parallel, watch } = require('gulp');

const css = require('./gulp-tasks/css');
const runBabel = require('./gulp-tasks/runBabel');

const watcher = () => {
  watch('./src/css/**/*.css', { ignoreInitial: true }, css);
  watch('./src/js/**/*.js', { ignoreInitial: true }, runBabel);
};

exports.default = parallel(css, runBabel);

exports.watch = watcher;
