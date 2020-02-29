const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	sum(userInput);
});

function sum(userInput){
	var n = parseInt(userInput[0]);
	var a = userInput[1].split(' ');
	var inp = a.map(x => parseInt(x,10));
	var sum = 0;
  	if(n <= 100000){
    for(i in inp){
        if(a[i]<0){
            sum += Math.abs(a[i]);
        }
    }
    console.log(sum);
    }
}
