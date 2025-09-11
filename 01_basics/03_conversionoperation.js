let score = "33"
let sscore = 33
console.log(typeof score);
console.log(typeof sscore);

// when u use "" it consider as string not number //
 let valueInNumber = Number(typeof score);
 console.log(typeof valueInNumber);

 //if u want to conver a string into a number than u wrote like this//
 console.log(valueInNumber);
// when u convert this number it doesnt mean it convert exact number which u can give so carefully forst check in js//

// "33" => 33
// "33abc" => NaN(not an number)
// true=> 1; false=>0;
//string => nan//

let isLoggedin = 1

let bolleanisLoggedin = Boolean(typeof isLoggedin)
console.log(bolleanisLoggedin);

//1=> true
//""=>false
//"nilesh"=> true//

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


