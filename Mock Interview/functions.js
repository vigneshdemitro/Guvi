// A function which returns an Object by asscociating the given value in first two parameter to the given object.

// assoc("a",1,{b:1,c:2}) => {a:1,b:1,c:2}

function assoc(a,b,data){
    tempObj = data;
    tempObj[a] = b;
    return tempObj;
}

// A function which concat the values given if both are of the same type.

// concat("ABC","DEF") => ABCDEF
// concat([],[]) => []
// concat(2,2) => 22
// concat(1,"a") => Type mismatch, Kindly pass same type arguments


function concat(a,b){
    if((typeof a) == (typeof b)){
        if (typeof a == "string"){
            return a+b;
        }
        else if(typeof a == "object"){
            tempObj = [];
            a.forEach(element => {
                tempObj.push(element)
            });
            b.forEach(element => {
                tempObj.push(element);
            })
            return tempObj;
        }
        else if(typeof a == "number"){
            x = a.toString();
            y = b.toString();
            return x+y;
        }
        
    }
    else{
        console.error("Type mismatch, Kindly pass same type arguments")
    }
}

// A function which return a new object dissocatinhg the given key from the object

// dissoc("a",{a:1,b:2,c:3}) => {b:2,c:3}

function dissoc(key,object){
    tempObj = object;
    delete tempObj[key];
    return tempObj;
}

// A function which return a array deleting the given index value from the given array

// drop(1,["foo","bar","baz"]) => ["bar","baz"]
// drop(4,["foo","bar","baz"]) => Give valid index to remove

function drop(index,inpArray){
    if(index > -1 && index < inpArray.length){
        inpArray.splice(index,1);
        return inpArray
    }
    else{
        return("Give valid index to remove")
    }
    
}

// A function which flips the given first two values in a resulting array

// flip(1,2,3) => [2,1,3]


const mergethree = (a,b,c) => [].concat(a,b,c);

function flip(inpArray){
    [inpArray[0],inpArray[1]] = [inpArray[1],inpArray[0]];
    return inpArray
}

// A function which tells whether the given value is present in object or not

function has(key,obj){
    let keysArray = []
   Object.keys(obj).forEach(k => {
       keysArray.push(k);
   })
   console.log(keysArray);
    if (key in keysArray){
        return false;
    }
    // keysArray.forEach(element => {
    //     if(element == key){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })
    else{
        return true;
    }
}

console.log(has(1,{name:"Vignesh",age:"22"}))