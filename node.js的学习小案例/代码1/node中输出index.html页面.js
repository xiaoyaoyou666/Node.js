const http=require('http');
const url=require('url');
const fs=require('fs');

cs=function(req,res){
	uri=req.url;
	if(uri!=='/favicon.ico'){
		//路由
		path=url.parse(uri).pathname;

		switch(path){
			case "/user/add":
				res.write('<h1>user add</h1>');
				break;
			case "/user/delete":
				res.write('<h1>user delete</h1>');
				break;
			case "/user/update":
				res.write('<h1>user update</h1>');
				break;
			case "/user/select":
				res.write('<h1>user select</h1>');
				break;
			default:
				data=fs.readFileSync('index.html');
				str=data.toString();
				res.write(str);
				break;
		}
	}
	res.end();
}

http.createServer(cs).listen(8888);
console.log('server is ok');

