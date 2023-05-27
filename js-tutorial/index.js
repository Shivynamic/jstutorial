// // console.log("hi");

// var myName = "Shewe";

// console.log(myName);

// console.log(typeof(myName));

// var year = 1200;
// debugger;
// if (year%4 ===0) {
//     if (year%100 === 0){
//         if (year%400 == 0){
//             console.log("A leap year");
//         }
//         else{
//             console.log("Not a leap year");
//         }
//     }
//     else{
//         console.log("A leap year");
//     }
// }
// else{
//     console.log("Not a leap year");
// } 


// if( score=0){
//     console.log("Lost");
// }
// else{
//     console.log("Won");
// }

// var age = 20;
// console.log((age>19) ? "Eligiible" : "Not Eligible");

// // (age>19) ? "Eligiible" : "Not Eligible";


// switch(area){
//     case 'circle':
//         console.log("Area of circle:");
//         break;
    
//     case 'triangle':
//         console.log("area of triangle");
//         break;
    
//     case 'square':
//         console.log("area of square");
//         break;

//     case 'rectangle':
//         console.log("area of rectangle");
//         break;

//     default:
//         console.log("Enter valid data")

// }

// var num =0;

// while (num<=10){
//     console.log(num);
//     num++;
// }

// do{
//     console.log("do "+num);
//     num++;
// }while (num==100);


// for(var num = 20; num<30;num++){
//     console.log(num);
//     console.log("this is for loop");
// }

// var x = 8;

// for(var i=1;i<=10;i++){
//     console.log(x+ "x"+i+" "+(x*i));
// }



// Function Definition

// Before we use a function we need to define it 
// A function definition (also called a function declaration or function statement) consists of the function keyword followed by :


// The name of the function 
// A list of parameters to the function enclosed in parantheses and seperated by commas.
// The JavaScript statements that define the function emclosed in curly brackets.
  

// var a=10;
// var b=20;

// function summ(x,y){
//     var tot= x+y;
//     console.log(tot); 
// }


// Calling function 

// summ(a,b);

// Function parameter vs function arguments

// function parameters are the names listed in the function's definition
//  function arguments are the real values passed tot the function



// WHY Functions?

// reuse code Define the code once and use it many times
// eliminates need of writing code again and again

// DRY ==  Do not Repeat yourself


//  Functions expressions
// Putting function's output to a variable
//  function newFunction(m,n){
//     var pro = m*n;
//     console.log(pro);
//  }

//  var funcExp=  newFunction(10,20);
//  funcExp;


//  Return keyboard

// When JS reeaches a return statement the function will stop executing
// Function often compute a return value. The return value is reeturned backto the caller.


// function newFunction2(m,n){
//     return  pro = m*n;
//  }

//  var funcEx = newFunction2(5,8);

//  console.log("the function "+ funcEx);


//  Anonymous function

// var Anon = function(a,b){
//     return a*b;
// }
// var pr = Anon(5,6);
// console.log(pr);

// let==block scope
// let f =10;
// for(let num =1;num<=10;num++){
//     console.log(`${f} x ${num} = ${f*num}`);
// }

// Default parameter

// function mult(a,b=5){
//     return a*b;
// }

// console.log(mult(3));


// FAT Arrow function

// console.log(sum());

// function sum(){
//     let a =5; b=6;
//     let sum = a+b;
//     return `The sum of the two number is ${sum}`;
// }
// ///////////////////////////////

// const sum1 = () => `The sum of two number is ${a=4,b=90}`;
// console.log(sum1());


// Arrays
// var def = new Array;

// var arrEx = ['absff',"aidj", 1, 2, 3, 5.0 ,"adsfdsf"];

// console.log(arrEx);


// var frens = ['shivangi',"manu",'shivi','manu','munmun'];

// console.log(frens[0]);

// for(let i=0; i<frens.length;i++){
// console.log(frens[i]);
// }


// FOR in ---> index

// for( let i in frens){
//     console.log(i);
// }

// For of ---> elements

// for( let elements of frens){
//     console.log(elements);
// }


//  for each loop

// frens.forEach(function(element,index,array){
//     console.log(element+" index " + index+" ar "+array);
// })

// using fat arrow

// frens.forEach((element,index,array)  => {
//     console.log(element+" index " + index+" ar "+array);
// })

// console.log(frens.indexOf("manu"));
// console.log(frens.lastIndexOf("manu"));

// console.log(frens.includes("shivangi",1));
// includes(string,startsfrom)

// const prices = [100,200,300,400,500,600,800,1000]

// const findEle = prices.find((currVal) => currVal>400);
// console.log(findEle);


// console.log(prices.find((currVal) => currVal>400));

// console.log(prices.findIndex((currVal) => currVal>400));

// const finEle = prices.filter((element,index)=>{
//     return element<800;
// });
// console.log(finEle);

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());
// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());


// push method adds the new element in the end of the array, and returns new length of the array. 


// const animals = ["ajsdb","ishdal","klasj"];

// animals.push("pushed");
// console.log(animals);

// const count = animals.push("pushed","cow","pigeon","kla");
// console.log(animals)
// console.log(count);


// UNSHIFT adds in the beginning
// animals.unshift("happy")
// console.log(animals);


// const count = animals.unshift("pushed","cow","pigeon","kla");
// console.log(animals)
// console.log(count);

// pop() removes last element

// const an= animals.pop();
// console.log(animals);
// console.log(an);


// SHIFT removes from the beginning of the array
// const plants = ['brocolli','cauliflower','kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newM = months.splice((months.length)-2,1,"Dec");
// console.log(months);
// console.log(newM);

// Splice returns the element deleted from the array

// const update = months.splice(1,1,"March");
// console.log(months);
// const upda = months.splice(months.indexOf('march'),1,"March");
// console.log(months);

// months.splice(months.indexOf('June'),1);
// console.log(months);


// months.splice(months.indexOf('April'),months.length-months.indexOf('April'));
// console.log(months);



// months.splice(months.indexOf('April'),Infinity);
// console.log(months);


// Map and Reduce 

// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((currEle,index,array)=>{
//     if(currEle>9){ 
//     return currEle};
// });
// console.log(newArr);

// Chainable method ==> map()

// let newe =  array1.map((curr,index,arr)=>{
//     return `${index},${curr},arr ${arr}`;
// });
// console.log(newe);

// is not chainable for each
// let newef =  array1.forEach((curr,index,arr)=>{
//     return `${index},${curr},arr ${arr}`;
// });
// console.log(newef);


//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?

// sol1: 
// let arr = [25, 36, 49, 64, 81];


// let sq = arr.map((cur,ind,arr)=>{
//     return (cur)**(1/2);
// });
// console.log(sq);

// let sq1 = arr.map((cur,ind,arr)=>{
//     return Math.sqrt(cur);
// });
// console.log(sq1);
// let arr = [2, 3, 4, 6, 8];

// let mull = arr.map((cur,ind,arr)=>{
//     return cur*2;
// }).filter((curEle)=>{
//     return curEle>10;
// });


// let mul = arr.map((cur)=>cur*2).filter((curE)=> curE>10);
// console.log("hi");
// console.log(mul);

// Reduce method

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [2, 3, 4, 6, 8];

// let sum = arr.reduce((accumulator,curr,ind,arr)=>{
//     return accumulator+=curr;
// });
// console.log(sum);


// let mul = arr.map((cur)=>cur*2).filter((curE)=> curE>10).reduce((accumulator,cur)=>accumulator+=cur);
// console.log(mul);

// in case we need to add some initial value we can pass that value as an argument to reduce function

// let sum = arr.reduce((accumulator,curr,ind,arr)=>{
//     return accumulator+=curr;
// },75);
// console.log(sum);


// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// let flat = arr.reduce((accum,cur)=>{
//     return accum.concat(cur);
// });

// console.log(flat);


// STRINGS in JS

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

// let myName = "vinod thapa";
// let myChannelName = 'vinod thapa';

// let ytName = new String("Thapa Technical");
// let ytName = 'thapa technical';

// console.log(myName);
// console.log((ytName));
// console.log(myName.length)

// Escape character == backslash


// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// let nySentence = 'We are the so-called "Vikings" from the north.';
// console.log(nySentence);


// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf('t',6));
// console.log(myBioData.lastIndexOf('t',6));

// let sData = myBioData.search("thapa");
// console.log(sData);
// case-sensitive,<<-



// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

// let res = str.slice(0,5);
// let res = str.slice(16);
// let res = str.slice(16,-6);

// console.log(res);


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.


// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.



// Display only 280 characters of a string like the 
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let extTw = myTweets.slice(0,280);
// console.log(extTw)
// console.log(extTw.length)


// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// var str = "Apple, Bananaa, Kiwi,Apple,Apple,Apple";
// let res = str.substring(8,-2);
// console.log(res);
// // If we give negative value then the characters are
//  counted from the 0th pos 


// let res = str.substr(7,6);
// let res = str.substr(-4);
// console.log(res)

// let rep = str.replace('Apple',"Orange");
// console.log(rep)


//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// var str = "Apple, Bananaa, Kiwi,Apple,Apple,Apple";
// let ans = str.charAt(9)
// console.log(ans)
// let ans1 = str.charCodeAt(0)
// console.log(ans1)


// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);
// let lo =str.toLowerCase();
// console.log(str.toLowerCase())
// console.log(lo)
// console.log(lo.toUpperCase())

// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "vinod"
// let lName = "thapa"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));

// var st = "                Hello  World           "
// console.log(st.trim())
// does not remove space from between


// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a, b,c d,e";   // String

// let ar = txt.split(",")
// console.log(ar)
// console.log(txt.split(","));

// Date and Time

// new Date()
// new Date(year,month, day,hours,minutes,seconds,milliseconds)

// new Date(milliseconds)
// new Date(date string)

// let curDate =new Date()
// console.log(curDate.toLocaleString())
// console.log(curDate.toString())

// now() returns milliseconds from Jan 1970
// console.log(Date.now())

// let curDate1 =new Date(2022,4,13,22,22,5)
// console.log(curDate1.toLocaleString())
// console.log(curDate1.toString())


// let curDate2 =new Date(2022,4,13)
// console.log(curDate2.toLocaleString())
// console.log(curDate2.toString())


// let curDate1 =new Date(2022,5)
// console.log(curDate1.toLocaleString())
// console.log(curDate1.toString())


// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());



// const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());



// console.log(curDate.setFullYear(2022));
// // // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());
// const curTime = new Date();

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


// console.log(curTime.getTime());
// // // // The getTime() method returns the number of milliseconds 
// // // since January 1, 1970
// console.log(curTime.getHours());
// // // // The getHours() method returns the hours of a date as a 
// // // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());




// MATH object 
/**** Section 9👉 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️
// console.log(Math.PI);

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

// let num = 10.551;
// console.log(Math.round(num));


// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// console.log(Math.pow(5,(1/2)));
// console.log(Math.sqrt(25));


// console.log(Math.abs(-5555));
// console.log(Math.abs(4-7))

// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.5))

// arr = [1,2,3,1000,-3,09,22]
// console.log(Math.max(1,2,3,1000,-3,09,22))
// console.log(Math.min(1,2,3,1000,-3,09,22))


// console.log(Math.floor(Math.random()*10))

// console.log(Math.trunc(4.9))
// console.log(Math.trunc(-4.9))






// if the argument is a positive number, Math.trunc() is equivalent to Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().

// DOM in JavaScript

// window vs document

// window:
// 1. Window is the main container or we can say the global Object and any operations 
// related to entire browser window can be  a part of window object.
// 2. All the members like objects,methods, or properties. If they are the part of window 
// object then we do not refer the window object.
// 3. Window has methods, properties and object, ex setTimeout() or setInterval() are the 
// methods whereas Document is the object of the window and it also has a screen object 
// with propertiess describing the physical display

// document:

/*
1. whereas the DOM is the child of window object
2. in the DOM we need to refer the document if we want to use the document object, methods
or properties
3. Document is just the object of the global object that is Window which deals with the document,
the HTML elements themselves.
*/

// BOM - browser Object Model


// Section 10👉 Document Object model in JavaScript 

// 1️⃣ Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object. 

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object


// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************



// 2️⃣ All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.

// For example
// 👉 window.screen or just screen is a small information 
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.
  

// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file




// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 





// alert(location.href);
// if(confirm("Want to visit google.com?")){
//     location.href = "https://www.google.com";
// }



// Events in JS 

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()
//)


// OBJECT LITETALS

// let human = {
//     myName : "shivangi",
//     myAge : 23,
//     getData: function(){
//         console.log(`My name is ${human.myName} and my age is ${human.myAge}`)
//     }
// }

// human.getData()
// let human1 = {
//     myName : "shivi",
//     myAge : 23,
//     getData(){
//         console.log(`My name is ${human1.myName} and my age is ${human1.myAge}`)
//     }
// }

// human1.getData()

// let human2 = {
//     myName:{
//         firstname:'shivangi',
//         lastname :'sharma'
//     },
//     myAge : 23,
//     getData(){
//         console.log(`My name is ${human2.myName.firstname} and my age is ${human2.myAge}`)
//     }
// }
// human2.getData()

// This object
// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

  // let bioData = { 
  //     myName : "thapatechnical",
  //     myAge : 26,
  //     getData : function(){
  //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = { 
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// 👉 What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );





// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// // For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();



// // ex 3 
// 
// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// let myAge = 20
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// Fat arrow function cannot be used with this object and if used will refer to the globalobject instead of being function bound

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//         console.log(this)
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();



// Call method

// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 

// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

//   const myBioData = ['vinod', 'thapa', 26];

//   let myFName = myBioData[0];
//   let myLName = myBioData[1];
//   let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);




// const randomm = ["first","sharma" , 23,"Maths"]

// let [position1, lnaem,age,sub] = randomm

// console.log(position1,lnaem,sub,age)

// we can add values too 
  
//   let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
//   console.log(myDegree);



  // ➡ Object destructuring 🏁
//   const myBioData = {
//     myFname : 'vinod',
//     myLname : 'thapa',
//     myAge : 26
//   }

//   let age = myBioData.age;
//   let myFname = myBioData.myFname;

//   let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
//   console.log(myLname);

// const newArr = {
//     ans : "Mango",
//     age : 23,
//     sub : "Maths"
// }

// let {ans,age,sub } = newArr;
// console.log(ans,age,sub)


// Dynamic Property of Object

// let myName = "shivangi"
// const myBio={
//     [myName] : "This is my name",
//     23 : "this is my age",
//     [34+35]:"whats this?"
// }

// console.log(myBio)


// if key and value are same we need not to write or declare again simple a single time writting the name of key would do

// let myName = "shivi"
// let myNickName = "champ"

// const myB = {myName,myNickName}
// console.log(myB)

// Spread Operators

//  if we want to append data of an array in a new array then we can use preivous array by adding ...ArrayName

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const spreadcolors = [...colors,'pink','magenta','cyan']
// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(spreadcolors)
// console.log(MyFavColors);



// ES7
// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// const isPresent = myColors.includes('red')
// console.log(isPresent)

// EXponentiation

// console.log(2**3)

// ES8 feature
// String padding


// let myName ="Shewe".padStart(7).padEnd(10)
// console.log(myName)


// const person = {name:'Fresd',age:25}
// console.log(Object.values(person))
// console.log(Object.entries(person))

// Spread operator for obejct 

// const sprperson = {...person, meew:"cat",dog:"bhow"}
// console.log(sprperson)

// const arr =[5,6,7,8]
// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// arr.flatMap((p)=>[p**2])

// console.log(arr.flatMap((i)=>[i*3]))
// console.log(arr.flat(3))
// console.log(arr.flat(Infinity))

// const theObj = Object.entries(sprperson)
// console.log(Object.fromEntries(theObj))

// ES2020

// let oldNum = Number.MAX_SAFE_INTEGER
// console.log(oldNumn+100)

//  Add n to the end of integer to convert it to bigInt
// console.log(9007199254740991n+900719925n)
// console.log(typeof(9007199254740991n+900719925n))

// Nullish

// console.log(null??"sometjign")

// ES2014


// "use strict"; // it lets you use traditional way of decalring JS variables and function--> old syntax
// x= 3.14
// console.log(x)



// ADVANCED JavaScript

// Event Propagation --> Order in which the elements receive the event

// const subtraction=(a,b)=>{
//     return abs(a-b)
// }


// const addition=(a,b)=>{
//     return a+b
// }

// const multiplication=(a,b)=>{
//     return a*b
// }

// const division=(a,b)=>{
//     return a/b
// }

// const calculator = (one,two,operator)=>{
//     return operator(one,two)
// }

// console.log(calculator(5,4,division))
// calculator is a higher order function while addition, subtraction, multiplication, division is callback function





// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c); //I can't use C 
// }

// first();



// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.log(outerFun(10))
// console.dir(checkClousure);
// checkClousure()


// "use strict"

// let x = "vinod";
// console.log(x);


// //🏁🏁🏁 Back To Advanced JavaScript 


// // **********************************************************************

// // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript

// // **********************************************************************


// // Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 


// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // // we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 




// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?


// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// //👻 What is Event Loop in JavaScript?
// // ppt explain 



// Currying

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3)
//         }
//     }
// }


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************



// // 8️⃣: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************

//  JSON ==> JavaScript Object Notation

// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);  
// // "{"key_1":"some text","key_2":true,"key_3":5}"  

console.log(object_as_string);

console.log(typeof(object_as_string)) 
// "string" 


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

var object_as_string_as_object = JSON.parse(object_as_string);  
// // {key_1: "some text", key_2: true, key_3: 5} 
console.log(object_as_string_as_object);
console.log(typeof(object_as_string_as_object)) 

// typeof(object_as_string_as_object);  
// // "object" 



// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });
