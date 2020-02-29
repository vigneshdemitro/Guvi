const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	n = parseInt(userInput[0]);
	a = userInput[1].split(' ');
	ar =a.map(x => parseInt(x,10));
	i = 0;
	sum = [];
  	if(n<=100000){
	while(i<n){
	    if(i+1<n){
	        sum_or = ar[i]|ar[i+1];
	        sum.push(sum_or);
	    }
	    i += 1;
	}
    }
	sum.sort((a,b) => a-b)
	console.log(sum[n-2])
});
