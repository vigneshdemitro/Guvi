const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  	var product=1;
	var n = parseInt(data);
  	if(n<=100000){
  	for(let i=1;i<=n;i++){
    	product *= i;
    }}
	console.log(product);
});