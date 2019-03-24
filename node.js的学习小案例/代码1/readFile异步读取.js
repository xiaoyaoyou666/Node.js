const fs=require('fs');

file='test.txt';
fs.readFile(file,function(err,data){
	str=data.toString();
	console.log(str);
});

console.log('file read end!');
