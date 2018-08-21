module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			browsers: 'last 2 versions',
			autoprefixer: {
				grid: true
			}
		},
		'cssnano': {
			preset: 'default'
		}
	}
}
