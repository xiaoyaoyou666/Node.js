//加载node模块
const fs=require('fs');

file='test.txt';

//异步读取
fs.readFile(file,function(err,data){
	str=data.toString();
	console.log(str);
});

console.log('file read end!');




