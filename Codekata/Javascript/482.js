const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	n = parseInt(data);
  	var list = [1000,1000];
  	if(n>1){
    for(let i=0;i<list.length;i++){
    	a = list[i]+list[i+1];
		list.push(a);
    }
		console.log(data);
});