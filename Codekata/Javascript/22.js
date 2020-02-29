const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var ar = data.split(" ");
  	[a1,b1,c1] = ar;
  	a = parseInt(a1);
  	b = parseInt(b1);
  	c = parseInt(c1);
  	d = (a*b)%c;
	console.log(d)
});
