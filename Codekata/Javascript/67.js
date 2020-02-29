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
    ar = userInput[0].split('');
    n = ar.length;
    if(n % 2 == 0){
        i = 0;
        while(i<n){
            [ar[i],ar[i+1]] = [ar[i+1],ar[i]];
            i += 2;
        }
        var str = ar.join('');
        console.log(str);
    }
    else if(n % 2 != 0){
        i = 0;
        while(i<n){
            [ar[i],ar[i+1]] = [ar[i+1],ar[i]];
            i += 2;
        }
        ar.splice(n-1,1);
        var str = ar.join('');
        console.log(str);
    }
    
}
