const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	var ar = data.split("");
  	var n = parseInt(data);
  	[a1,b1] = ar;
  	a = parseInt(a1);
  	b = parseInt(b1);
  	m = a+b;
  	j = a*b;
  	k = m+j;
  	if(k == n){
    console.log('Great');
    }
  	else{
    console.log('no');
    }
});
