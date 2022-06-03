// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function h1Tag() {
    const element = document.getElementById('h1').innerHTML = "MERN stack";
    console.log(element);
}

// Write code to get 1st H1 element from a webpage using DOM

const element1 = document.getElementsByTagName("h1");
let h1Element = element1[0].innerText;
console.log(h1Element);



// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function time(){
 const time = new Date();
const element2 = document.getElementById('time').innerHTML = time;
// console.log(element1);
}
setInterval(time,1000);
time();

//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


function replaceText(){
   document.getElementsByClassName('replace')[0].innerText = "Welcome to Elevation academy";  
}

// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
$('#text').click(function(){
$('#hide').hide();
})

//Given an array of 0's and 1's find out number of 0's

let arr = [1,1,0,1,0,1,0]

let res =arr.filter((a) => a==0);
console.log(res);
let length = res.length
console.log(length);

// Given an array find out total no. of odd and even nos.

let arr1 = new Array(2,3,4,5,6,7,8);
console.log(arr);
let even = arr.filter((a)=>{
    return a % 2 == 0;
});
console.log(even);
console.log(even.length);

let odd = arr.filter((b)=>{
    return b % 2 != 0;
});
console.log(odd);
console.log(odd.length);



// Given a string find out number of vowels

let str = "javascript";
let vowels = 0
str.split("").filter((c) =>{
    if(c=="a" ||c=="e"||c=="i"||c=="o"||c=="u"){
        vowels++
    }
})
console.log("vowels:",vowels);

