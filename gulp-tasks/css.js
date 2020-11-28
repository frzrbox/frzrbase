const { dest, src } = require('gulp');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var nested = require('postcss-nested');

const css = () => {
	const plugins = [
		autoprefixer({ browsers: ['last 1 version'] }),
		cssnano(),
		nested,
	];
	return src('./src/css/**/*').pipe(postcss(plugins)).pipe(dest('dist/css'));
};

module.exports = css;
