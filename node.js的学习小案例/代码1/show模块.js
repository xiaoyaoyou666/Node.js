//自定义show模块
//定义show类

function show(){
	this.name='user1';
	this.say=function(){
		console.log('my name is '+this.name);
	} 
}

module.exports=new show();
