const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	square(data);
});

function square(data){
	var a = data.split('');
  	var square=0;
  	for(let i=0;i<a.length;i++){
    	b = parseInt(a[i]);
      	square += b**2;
    }
  	console.log(square);
}
