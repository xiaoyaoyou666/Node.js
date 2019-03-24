//加载node模块
const fs=require('fs');

file='test.txt';

//同步读取
data=fs.readFileSync(file);

str=data.toString();

console.log(str);



