const assoc = (a, b, data) => Object.assign({[a]:b},data);


const assocPath = (keys, v, o) => keys.reduceRight((value, key) => ({ [key]: value }), v);


const concat = (a,b) => ((typeof a === typeof b) ? a.concat(b) : "input same data type");


const dissoc = (k,obj) => { let object = {...obj}; delete object[k]; return object };


const drop = (index,arr) => { let a = Object.assign([],arr); a.splice(index,1); return a }


const flatten = (arr) => arr.flat(Infinity);

const mergethree = (a,b,c) => [a,b,c];

const flip = (arr) => { [arr[0],arr[1]] = [arr[1],arr[0]]; return arr };


const has = (key,obj) => obj.hasOwnProperty(key);


