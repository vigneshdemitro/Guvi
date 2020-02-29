const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  	var product=1;
	var n = data.split('');
  	for(let i=0;i<n.length;i++){
      	a = parseInt(n[i]);
    	product *= a;
    }
	console.log(product);
});
