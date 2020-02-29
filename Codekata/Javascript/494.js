const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	sorting(userInput);
});

function sorting(userInput){
	var n = parseInt(userInput[0]);
  	var a = userInput[1].split(' ');
  	var salary = a.map(x => parseInt(x,10));
  	salary.sort();
  	console.log(...salary);
}
