const { dest, src } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nested = require('postcss-nested');
const postCssImport = require('postcss-import');

const css = () => {
  const plugins = [
    autoprefixer(),
    nested,
    postCssImport({ root: 'src/css/' }),
    cssnano(),
  ];
  return src('./src/css/**/*').pipe(postcss(plugins)).pipe(dest('dist/css'));
};

module.exports = css;
