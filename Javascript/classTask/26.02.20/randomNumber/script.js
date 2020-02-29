var min = 100000;
var max = 999999;
var rand = Math.floor(Math.random()*(max-min))+min;
var randNumber = rand.toString();
var myArray = randNumber.split("");


function unique(){
    for(let i=0;i<myArray.length;i++){
        for(let j=i+1;j<myArray.length;j++){
            if(myArray[i] == myArray[j]){
                randomNumber();
            }
        }
    }
}


unique();
console.log(typeof Math.floor);

function randomNumber(){
    rand = Math.floor(Math.random()*(max-min))+min;
    randNumber = rand.toString();
    myArray = randNumber.split("");
}

function creatediv(){
    var numberDiv = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Random Number';
    var randomNumber = document.createElement('p');
    randomNumber.setAttribute('id','randNumber');
    randomNumber.innerHTML = randNumber;
    numberDiv.appendChild(h1);
    numberDiv.appendChild(randomNumber);
    document.body.appendChild(numberDiv);
}


