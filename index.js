// console.log("Hello");
// window.alert(`THis is an alert?!`);
// window.alert(`hit n run krvado`);

// YO comment maxxing?
/*multi
line comment maxxing */

// document.getElementById("heading1").textContent = 'Hello';
// document.getElementById("random-para?").textContent = " Who is a good kitten?"

//  Variables
// declation = let ;
let x;
x = 100;

console.log(x);
let age = 19;
let gpa = 9.77 ;
let claude_max_subscriptions = 0;

console.log(`im ${age} years old my gpa is ${gpa} HAHA and i have ${claude_max_subscriptions} claude_max_subscriptions`);
console.log(typeof gpa);

let FirstStringInJs = "yO fIrEst Ever String!?!";
console.log(typeof FirstStringInJs);
console.log("MMm this is my first string in js?" + FirstStringInJs);
// booleans we dont needna go over em do we 
// arithmetic slop 

//accepting user input
let username;

document.getElementById("usr").onclick = function () {
    username = document.getElementById("txt").value;
    console.log(username);
    document.getElementById("random-para?").textContent = "Logged in as " + username

}

// type conversion FUck yes WE HAVE ALWAYSSSSSSS SKIPPED TYPE CONVERSION
// constants SLop


// Counter Program:
const decrease = document.getElementById("b3");
const reset = document.getElementById("b2");
const increase = document.getElementById("b1");
const contlabel = document.getElementById("counter");
let count = 0;

increase.onclick = function(){
    count++;
    contlabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    contlabel.textContent = count;
}
reset.onclick = function(){
    count = 0 ;
    contlabel.textContent = count;
}

// MATH object like math.h teehee

//let x = 3.2;
//let y=2;
//let z;
//z = Math.round(x);
//console.log(z);
// math.pow(x,y);

//ceil , floor , truncate etc..

// randomnm = Math.random() [0,1]

// Random number generator 

const min = 66;
const max = 99;
let randomNum;
document.getElementById("brnd").onclick = function(){

   randomNum = Math.floor(Math.random()*(max-min));
   document.getElementById("rand").textContent = randomNum.toString();
}