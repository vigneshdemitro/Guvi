const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var rspace = data.split(" ").join("");
  	var len = rspace.length;
	console.log(len);
});
