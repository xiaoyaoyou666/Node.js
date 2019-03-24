// web模块
path=require('path');

str='/usr/local/www/index.sh';

// dname=path.dirname(str);
// dname=path.basename(str);
// dname=path.extname(str);
dname=path.parse(str);

console.log(dname);


