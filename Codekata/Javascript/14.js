const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  	var out = [];
	var n = data.split('');
  	for(let i=0;i<n.length;i++){
      	a = parseInt(n[i]);
    	if(a%2 != 0){
        	out.push(a);
        }
    }
	console.log(...out);
});