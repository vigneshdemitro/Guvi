const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	[n1,m1] = data.split(' ');
  	var n = parseInt(n1);
  	var m = parseInt(m1);
  	if((n-m)%2 == 0){
	console.log('even');
    }
  	else{
    console.log('odd');
    }
});
