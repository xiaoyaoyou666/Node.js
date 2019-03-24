const net=require('net');

chat=net.createServer();
chat.on('connection',function(client){
	client.write('hello world');

	client.on('data',function(data){
		console.log('Adai: '+data.toString());
	});

});
chat.listen(9000);

console.log('telnet server ok!');
