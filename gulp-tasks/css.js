const { dest, src } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nested = require('postcss-nested');
const postCssImport = require('postcss-import');

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

const criticalStyles = ['critical.css', 'home-critical.css'];

const calculateOutput = ({ history }) => {
  // By default, we want a CSS file in our dist directory, so the
  // HTML can grab it with a <link />
  let response = './dist/css';

  // Get everything after the last slash
  const sourceFileName = /[^/]*$/.exec(history[0])[0];

  // If this is critical CSS though, we want it to go
  // to the _includes directory, so nunjucks can include it
  // directly in a <style>
  if (criticalStyles.includes(sourceFileName)) {
    response = './src/_includes/css';
  }

  return response;
};

const css = () => {
  const plugins = [
    autoprefixer(),
    nested,
    postCssImport({ root: 'src/css/' }),
    cssnano(),
  ];
  return src('./src/css/**/*')
    .pipe(postcss(plugins))
    .pipe(dest(calculateOutput, { sourcemaps: !isProduction }));
};

module.exports = css;
