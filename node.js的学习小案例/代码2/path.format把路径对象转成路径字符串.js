// web模块
path=require('path');

pobj={ 
	root: '/',
	dir: '/usr/local/www',
	base: 'index.sh',
	ext: '.sh',
	name: 'index'
};

str=path.format(pobj);

str2=str.replace('\\','/');

console.log(str2);


