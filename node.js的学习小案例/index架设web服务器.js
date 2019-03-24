const http=require('http');
cs=function(req,res){
    res.write('hello world!');
    res.end();
}
http.createServer(cs).listen(666);
console.log('http is ok!');