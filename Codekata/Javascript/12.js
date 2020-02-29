const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	multiple(data);
});

function multiple(data){
	N = parseInt(data);
	if(N%13 == 0){
	console.log('yes');
    }
  	else{
	console.log('no');
    }	
}
