const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var n = parseInt(data);
  	if(n % 7 == 0){
	console.log('yes');
    }
	else if(n % 7 != 0){
    console.log('no');
    }
});
