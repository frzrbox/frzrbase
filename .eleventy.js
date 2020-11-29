// Transforms
const htmlMinTransform = require('./src/transforms/html-min.js');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = (config) => {
  config.addWatchTarget('./src/js/');

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
