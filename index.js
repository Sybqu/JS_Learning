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

//COnditional statements Skip.

function greeter() {
    // Create a Date object to access time methods
    const now = new Date();
    
    // Get the current hour (0-23)
    const hours = now.getHours();
        let time_rn;
    if (hours >= 5 && hours < 12) {
        time_rn = "SLeepy Time mwwwhh nyaaa~";
    } else if (hours >= 12 && hours < 18) {
        time_rn = "Wake the Fuck Up Samurai We've got a city to burn";
    } else {
        time_rn = "G00N G00N G00N";
    }
    const element = document.getElementById("heading1");
    if (element) {
        element.textContent = `${time_rn}`;
    }    
    console.log(time_rn);
}

greeter();

// Checked Property

const cb1 = document.getElementById("cb1");
const cb2 = document.getElementById("cb2");
const cb3 = document.getElementById("cb3");
const cb4 = document.getElementById("cb4");

const sbm = document.getElementById("sbm");
const sb_result = document.getElementById("sb_result");
const pay_result = document.getElementById("pay_result");

sbm.onclick = function(){

    if(cb1.checked){
        sb_result.textContent = "Congratulations ur now subscribed !!!";
          if(cb2.checked){
        pay_result.textContent = "You selected Visaaa 💳";
    }
    else if(cb3.checked){
        pay_result.textContent = "You selected Dihhhhh 🍆";
    }
    else if(cb4.checked){
        pay_result.textContent = "You selected GPAY 💰";
    }
    else{
        pay_result.textContent = "Please select a payment method.";
    }
    }
    else{
        sb_result.textContent = "Fuck YOU ur NOT subscribed !!!";
    }
}
// TERNARY OPERATORS (skip)
// SWITCH CASE (slip)
// STRING METHODS (skip)
// STRING Slicing (skip)
// METHOD Chaining (skip)
// LOGICAL Operators (skip)
// LOOPS (skip)
// Number Guessing game
// functions

function despicableme(name){
    console.log("Who will u be tn thats the question" + NAME);
}

// arrays in JS
// .push(val) and .pop() are inbuilt
// .unshift(val) .length() .indexOf(val)
// Spread Operator = ... allows an iterable like string or array to be expanded into separate elements
// Rest Parameter : Packing , bundles separate elemenets into array

const f1 = "orange";
const f2 = "apple";
const f3 = "grape";

function openFridge(...fruits){
    console.log(...fruits);
}
openFridge(f1,f2,f3);

// RANDOM PASSWORD GENERATOR
 
function genpass(length, IncLC, IncUC, IncNum, IncSym) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-/.,';][{}|\\:<>?";

    let allowedchars = "";
    let password = "";

    allowedchars += IncLC ? lowercaseChars : "";
    allowedchars += IncUC ? uppercaseChars : "";
    allowedchars += IncNum ? numbers : "";
    allowedchars += IncSym ? symbols : "";

    if (allowedchars.length == 0) {
        window.alert("stop fucking around or you'll get hacked");
        return "";
    }

    if (length < 8) {
        window.alert("At least 8 chars long");
        return "";
    }

    for (let i = 0; i < length; i++) {
        const rndIDX = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[rndIDX];
    }

    console.log("password suggestion :" + password);
    return password;
}


const passLen = 8;
const IncLC = true;
const IncUC = true;
const IncNum = true;
const IncSym = true;

const random_pass = genpass(passLen, IncLC, IncUC, IncNum, IncSym);
