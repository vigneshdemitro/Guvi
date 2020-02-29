const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	star(data);
});

function star(data){
    let n = data.length;
    if(n%2 == 0){
        var inp = data.split('');
        mid = n/2;
        mid1 = mid-1;
        inp[mid] = "*";
        inp[mid1] = "*";
        var out = inp.join('');
        console.log(out);
    }
    else if(n%2 !=0){
        var inp = data.split('');
        mid = Math.floor(n/2);
        inp[mid] = "*";
        var out = inp.join('');
        console.log(out);
    }
}
