const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	number_check(userInput);
});


function number_check(userInput){
	N = parseInt(userInput[0]);
	[a,b] = userInput[1];
	L = parseInt(a);
	R = parseInt(b);
	if(N > L && N < R){
		console.log('yes');
    	}
  	else{
    		console.log('no');
    	}
}  