const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var n = parseInt(data);
  	var m = n*1000;
  	var cm = n*100000;
	console.log(m);
  	console.log(cm);
});
