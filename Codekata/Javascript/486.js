const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	dealer(userInput);
});

function dealer(userInput){
	var n = parseInt(userInput[0]);
  	var a = userInput[1].split(' ');
  	var dealer_price = a.map(x => parseInt(x,10));
  	var min = Math.min(...dealer_price);
  	var b = dealer_price.indexOf(min);
  	console.log('Dealer'+b.toString())
}
