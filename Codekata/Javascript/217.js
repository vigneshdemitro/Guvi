const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	power(data);
});

function power(data){
	var n = data.split(' ');
  	[a,b] = n.map(x => parseInt(x,10));
  	c = a**b;
  	console.log(c);
}
