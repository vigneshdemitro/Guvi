const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	sorting(data);
});

function sorting(data){
    string = data.split(' ');
    a = string.sort();
    b = a.join(' ');
    console.log(b);
}
