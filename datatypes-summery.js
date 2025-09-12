// premitive datatypes

//7 types :string number bollean , number, undefined , symbol, BigInt.

const score = 100;
const scoreValue = 100.4;

let score;
const isLoggedin = true;
const outsideTemp = null;

const id = symbol('123');
const anotherId = symbol('123')

console.log(id === anotherId);



// refence type(non premitive datatypes)

// array, objects , functions

const heros =['shakti man','nagraj'];
let myObj= {
    name: "nilesh",
    age: "21",
}

let myFunction = function(){
    console.log("hello world");
    
}
//jitne v non premitive datatypes hai unka typeof object function hin ayega .
