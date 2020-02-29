const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	difference(userInput);
  	
});

function difference(userInput){
  	out = [];
	a = userInput[0].split(' ');
  	b = userInput[1].split(' ');
  	[a1,b1] = a;
  	n = parseInt(a1);
  	m = parseInt(b1);
  	var i=0;
  	while(i<n){
  	    if((i+1)<n){
  	        k = parseInt(b[i]);
  	        l = parseInt(b[i+1]);
  	        diff = l-k;
  	        if(diff>m){
  	            out.push(1);
  	        }
  	        out.push(0);
  	    }
  	    i+=1;
  	}
  	console.log(...out);
}