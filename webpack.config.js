//http://www.tuicool.com/articles/Vzei6r
module.exports = {
	//页面入口文件配置
	entry: {	
		index : './www/js/index.js'
	},
	//入口文件输出配置
	output: {
		path:"./www/dist", //文件输出路径
		publicPath:"./www/", //访问Html的路径
    filename:'bundle.js' //打包后的文件名
	},
	module: {
    loaders: [
      { test: /\.js$/, loader: "babel"},
    ]
  }
};