//创建指定的某个目录下分别为所有的文件夹创建js文件 并且文件名称均为对应目录的名称
var fs = require("fs");

//读取目录
fs.readdir("./", function(err,files){
	if(err){
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file)
		fs.stat('./'+file,function(err,stats){
			if(stats.isDirectory()){
				fs.open('./'+file+'/'+file+'.js','w',function(err,fd){
					if(err){
						return console.error(err);
					}
					console.log(file+'.js文件创建成功')
					fs.close(fd,function(){
						console.log('文件关闭成功')
					})
				})
			}
		})
	})
})