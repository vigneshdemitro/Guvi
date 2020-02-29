const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	sorting(userInput);
});

function sorting(userInput){
	var n = parseInt(userInput[0]);
	var a = userInput[1].split(' ');
	my_salary = {};
    var i = 0;
    while(i<(n*2)){
    key = a[i];
    my_salary[key] = parseInt(a[i+1]);
    i += 2;
    }
    keysSorted = Object.keys(my_salary).sort((a,b)=>my_salary[a]-my_salary[b]);
    for(i in keysSorted){
        console.log(keysSorted[i]);
    }
}
