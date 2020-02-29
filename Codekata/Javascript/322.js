const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	reverse(data);
});


function reverse(data){
    a = data.split(' ');
    rev = a.reverse();
    console.log(...rev)
}
