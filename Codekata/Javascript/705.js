const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	sorting(data);
});

function sorting(data){
    var string = data;
    var duplicate=[];
    for(let i=0;i<string.length;i++){
        if(string[i] == string[i+1]){
            if(string[i] in duplicate){
                
            }
            duplicate.push(string[i]);
        }
    }
if(duplicate.length > 0){
	console.log(...duplicate);
}
else{
  	console.log(-1);	
}
}
