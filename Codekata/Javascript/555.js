const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	discount(userInput);
});

function discount(userInput){
  	var discount = [];
	var n = parseInt(userInput[0]);
  	var arr = userInput[1];
  	var k = parseInt(userInput[2]);
	for(let i=0;i<n;i++){
		if(parseInt(arr[i])%k == 0){
			discount.push(1);
		}
		discount.push(0);
	}
	console.log(...discount);
} 	
  