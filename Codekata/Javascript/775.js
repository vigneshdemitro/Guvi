const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  	n = parseInt(data);
	var out = ((n*(9/5))+32);
  	var round = out.toFixed(2);
	console.log(round);
});
