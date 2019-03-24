//加载node模块
const fs=require('fs');

file='test2.txt';

str='1111\n2222\n3333\n4444\n5555';

//异步读取
fs.writeFile(file,str);

console.log('file write end!');


