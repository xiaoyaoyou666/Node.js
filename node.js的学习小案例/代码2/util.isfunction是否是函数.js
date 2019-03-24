//加载node模块
const util=require('util');

show=function(){
	console.log('132');
}

console.log(util.isFunction(show));
