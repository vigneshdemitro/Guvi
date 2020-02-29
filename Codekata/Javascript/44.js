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
	var b = userInput[2].split(' ');
  	var list1 = a.map(x => parseInt(x,10));
  	var list2 = b.map(x => parseInt(x,10));
  	var out = [];
	if(1<=n<=100000){
  	for(let i = 0; i < list2.length; i++) {
    if(list1.indexOf(list2[i]) > -1){
        out.push(list2[i]);
        }
    }
    out.push(-1);
    }
    console.log(...out);
}