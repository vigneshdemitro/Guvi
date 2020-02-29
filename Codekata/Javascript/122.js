const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	swap(userInput);
});


function swap(userInput){
    n = parseInt(userInput[0]);
    a = userInput[1].split(' ');
    ar = a.map(x => parseInt(x,10))
    console.log(ar)
    if(n % 2 == 0){
        i = 0;
        while(i<n){
            [ar[i],ar[i+1]] = [ar[i+1],ar[i]];
            i += 2;
        }
        console.log(...ar);
    }
    else if(n % 2 != 0){
        i = 0;
        while(i<n){
            [ar[i],ar[i+1]] = [ar[i+1],ar[i]];
            i += 2;
        }
        ar.splice(n-1,1);
        console.log(...ar);
    }
    
}
