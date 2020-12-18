const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
process.env.NODE_ENV = 'development';


// 构建开发环境
function devRender(){
	const compiler = webpack(webpackConfig);
	new WebpackDevServer(compiler, {
		contentBase: webpackConfig.output.path,
		publicPath: webpackConfig.output.publicPath,
		compress: true,		// 开发服务器启用gzip压缩
		progress: true,		// 控制台显示打包进度
		hot: true,			// 热加载
		open: true, 		// 自动打开浏览器
	}).listen(8083, 'localhost', err => {
		if(err) console.log(err);
		console.log(chalk.blue('\n Listening at http://localhost:8083 \n'));
	})
}

devRender();