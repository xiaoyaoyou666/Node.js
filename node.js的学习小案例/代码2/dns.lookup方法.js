// dns模块

dns=require('dns');

domain='www.yzmedu.com';

dns.lookup(domain,function(err,ip,family){
	console.log('ip is '+ip);
});

