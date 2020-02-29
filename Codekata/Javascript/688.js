const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	minimum(userInput);
});

function minimum(userInput){
	var n = parseInt(userInput[0]);
	var arr = userInput[1].map(Number);
  	arr.sort((a,b) => a-b);
	console.log(arr[0]);
}
