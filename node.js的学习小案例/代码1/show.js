//web模块的测试
var http = require('http');

http.crateServer(function(request,response){
    console.log(request);
}).listen(8080);