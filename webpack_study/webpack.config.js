// 3. 打包
module.exports = {
	entry: './modules/main.js',                // 入口
	output: {
		filename: './js/bundle.js'
	}
}


// 终端执行： webpack命令 产生在dist文件夹中        webpack --watch