const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	multiples(data);
});


function multiples(data){
	var n = parseInt(data);
  	multi = [];
  	for(let i=1;i<=3;i++){
    	var mul = i*n;
      	multi.push(mul);
    }
	console.log(...multi);
}
