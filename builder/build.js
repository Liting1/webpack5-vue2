process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.js');

webpack(webpackConfig).run(err => {
	if(err) {
		console.log(chalk.red(err))
	} else {
		console.log("打包完成！！");
	}
})