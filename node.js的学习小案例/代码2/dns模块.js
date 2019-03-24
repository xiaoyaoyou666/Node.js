// dns模块

dns=require('dns');

dns.lookup('www.github.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
	   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
	});  
});

