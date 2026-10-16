// console.log("Hello");
// window.alert(`THis is an alert?!`);
// window.alert(`hit n run krvado`);

// YO comment maxxing?
/*multi
line comment maxxing */
// ek feature mei bnadu tere broski ke 12
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

const lengthInput = document.getElementById("length");

const IncLC = document.getElementById("IncLC");
const IncUC = document.getElementById("IncUC");
const IncNum = document.getElementById("IncNum");
const IncSym = document.getElementById("IncSym");

const generateBtn = document.getElementById("generate");
const passwordOutput = document.getElementById("password");

generateBtn.onclick = function () {

    const length = Number(lengthInput.value);

    const random_pass = genpass(
        length,
        IncLC.checked,
        IncUC.checked,
        IncNum.checked,
        IncSym.checked
    );

    passwordOutput.value = random_pass;
};


//callback functions: function passed to another function!
function hello(callback){
    console.log("HEllo chat");
    callback();
}
function goodbye(){
    console.log("Goodbye chat");
}
hello(goodbye);

//forEach() = This methods goes through the iterable and applies callback as side effects does not return a new array
/* array.forEach(callback) 
element,index and array are provided as parameters of the callback function 
*/

// map() just like python , returns a new array
// array.map(func())

// .filter() creates a new array but filtering out elements


// .reduce() Reduces the elements of an array to a single value

// function expressions : way to define functions as values or variables

setTimeout(function(){
    console.log("gm");
},3000);

const gm = function GM(){
    console.log("HEllo");
}
setTimeout(gm,1000);

// arrow functions good for simple functions which are only used once

const meow = (name,caste) => console.log("MOG MOG M OG " + name + caste);

meow("burrah","jatt nu kehnde clutch baliyee");
// ============================= OOP ====================================
// object{key:value,function()}
// This keyword already studied in java ^^ <3
// Constructors
function car(name,brand,color,CC){
    this.name=name;
    this.brand=brand;
    this.color=color;
    this.CC=CC;
}

const car1 = new car("jesko","koenigsegg","green","boht tez")

// Classes
// Static keyword
// inheritance
// Super
// Getters and setters (forgor)
// Destructuring , array [] objects {} extract values and assign em to vars
// Nested objects
// Array of objects  just like a dictionary
// Sorting 
// Date Objects
// CLOSURES!!!
// setTimeout(callback,delay);
// clearTimeout(timeoutId);

// CLock program
function updateclock(){
const date_today = new Date();
var hours = date_today.getHours();
var meridem = hours >= 12 ? "PM" : "AM";
hours = hours.toString().padStart(2,0);
var minutes = date_today.getMinutes().toString().padStart(2,0);
var seconds = date_today.getSeconds().toString().padStart(2,0);
var time_string = `${hours}:${minutes}:${seconds} ${meridem}`
document.getElementById("CLOCK").textContent=time_string;
}
setInterval(updateclock,1000);

// stop watch program
// ES6 MODULES!!!!
// are basically function files which u can export for reusability
// ASYNC CODE!!!!!
// ERROR HANDLING FUNK NAH

// Calculator place holder(...)

// IMPORTANT! DOM : DOCUMENT OBJECT MODEL
// ELEMENT SELECTORS IN JS

const elements = ["Hello", "World", "Bro", "Random"];

const randomElement = document.getElementById("randomElement");

const randomIndex = Math.floor(Math.random() * elements.length);

randomElement.textContent = elements[randomIndex];

const elements1 = ["div", "p", "h1", "button"];

const randomTag = elements1[Math.floor(Math.random() * elements.length)];

const element = document.createElement(randomTag);
element.textContent = "ChaKaidi?";

document.body.appendChild(element);

const DOMMANIPULATION = document.getElementById("DOMmanipulation");
const ulelements = document.querySelectorAll("ul");
ulelements.forEach(ulelement => {
    const firstchild = ulelement.firstElementChild;
    firstchild.computedStyleMap.backgroundColor = "yellow";
});

const olelements = document.querySelectorAll("ol");
olelements.forEach(olelement => {
    const firstchild = olelement.firstElementChild;
    const sihhbling = olelement.nextElementSibling;
    firstchild.style.backgroundColor = "yellow";
    sihhbling.style.backgroundColor = "pink";
});

const eventbox = document.getElementById("eventlisteners");

// .addEventListener(event,callback)

function Changecolor(event){
    eventbox.style.backgroundColor="red";
    console.log(event);
}

function randomcolor(){
    const r = Math.random()*256;
    const g = Math.random()*256;
    const b = Math.random()*256;

    eventbox.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log("am i working?!");
}
eventbox.addEventListener("mouseenter",randomcolor);
eventbox.addEventListener("mouseleave",randomcolor);

let ycod = 0;
let xcod = 0;
document.addEventListener("keydown", event => {
     console.log(event.key);
    if(event.key.startsWith("Arrow")){
        switch(event.key){

            case "ArrowUp":
                ycod-=10;
                break;
            case "ArrowDown":
                ycod+=10;
                break;
            case "ArrowRight":
                xcod+=10;
                break;
            case "ArrowLeft":
                xcod-=10;
                break;            
        }
    }
    eventbox.style.top=`${ycod}px`;
    eventbox.style.marginLeft=`${xcod}px`;
});

//nodelist
//classlist
const display = document.querySelector(".calc-current");

let first = 0;
let op = "";

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.num !== undefined) {
            display.textContent =
                display.textContent === "0"
                    ? btn.dataset.num
                    : display.textContent + btn.dataset.num;
        }

        else if (btn.dataset.action === "clear") {
            display.textContent = "0";
            first = 0;
            op = "";
        }

        else if (operations[btn.dataset.action]) {
            first = Number(display.textContent);
            op = btn.dataset.action;
            display.textContent = "0";
        }

        else if (btn.dataset.action === "equals" && op) {
            display.textContent = operations[op](
                first,
                Number(display.textContent)
            );
            op = "";
        }
    });
});


// classlist , allows u  to interact w an element list of classes , resuable classes 
// add() , remove() , toggle(Remove if present,add if not)
// replace(oldClass,newClass)
// contains()

//rps

pchoice = document.getElementById("pchoice");
choice = document.getElementById("choice");
dis = document.getElementById("display");

const choices = ["rock", "paper", "scissors"];

function playgame(plchoice) {
    dis.classList.remove("bluetxt", "redtxt");
    const cmpchoice = choices[Math.floor(Math.random() * 3)];


    pchoice.textContent =("Player Choice: " + plchoice);
    choice.textContent = ("Computer Choice: " + cmpchoice);    

    if (plchoice === cmpchoice) {
        console.log("Draw!");
        result="draw";
        dis.textContent = "ITS A TIE";

    } 
    else if (
        (plchoice === "rock" && cmpchoice === "scissors") ||
        (plchoice === "paper" && cmpchoice === "rock") ||
        (plchoice === "scissors" && cmpchoice === "paper")
    ) {
        console.log("You win!");
        result="win";
        dis.classList.add("bluetxt");
        dis.textContent = "YOU WIN!";

        
    
    } 
    else {
        console.log("Computer wins!");
        result="loss";
        dis.classList.add("redtxt");
        dis.textContent="HAHAHA LOSERRR";
        
    }
}

const bt = document.querySelectorAll(".buttonrps");

bt.forEach(btn =>{
    btn.addEventListener('click',()=>{
    playgame(btn.dataset.choice);
  })    
}
);

taxt = document.getElementById("txts");

const sumbit = document.getElementById("mokeponBtn");

async function fetchmkpn() {
  try {
    const taxt = document.getElementById("mokeponInput");
    const pokemon = taxt.value.trim().toLowerCase();

    console.log("Fetching Pokemon:", pokemon); // Check what this prints in Console!

    if (!pokemon) {
      console.warn("Input box is empty! Type 'pikachu' in the box first.");
      return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!response.ok) {
      throw new Error("keep it lowk yeah u know me?!");
    }

    const kdot = await response.json();
    const mkpnsprite = kdot.sprites.front_default;

    console.log("Sprite URL found:", mkpnsprite); // Should print a raw.githubusercontent.com link

    const img = document.getElementById("mokeponSprite");
    img.src = mkpnsprite;
    img.style.display = "block";

  } catch (error) {
    console.error(error);
  }
}

sumbit.addEventListener("click", fetchmkpn);