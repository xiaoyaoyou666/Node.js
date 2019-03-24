process.stdin.on('readable',function(){
	str=process.stdin.read();
	if(str!==null){
		process.stdout.write('data: '+str);
	}
});


