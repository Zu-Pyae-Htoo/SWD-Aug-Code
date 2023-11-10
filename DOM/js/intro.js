// Day46 Nov9/2023

// const run = function (width, breadth) {
//   return width * breadth;
// };

// const name = window.prompt("What is your name?");
// window.alert("My name is " + name)

//window obj prompt,confirm , print ,alert
// =======================================

// const width = window.prompt("What is your room width in ft?");
// const breadth = window.prompt("What is your room breadth in ft?");
// window.alert(`Your room area is ${run(width,breadth)} sqft`);

// const result = window.confirm("Are you ready go to school")
// window.alert(result? "Yes,I'm" : "Not yet")

// window.print() <= output

//prompt => text input
//confirm => true or false || yes or no
//print => printer output
//alert => output

//Selector
// ==========

// const heading = document.getElementById("heading");
// const para = document.getElementById("para");
const googleLink = document.getElementById("googleLink");
// const listGroup = document.getElementById("linkGroup");
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");

//Get
// =========
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(googleLink);

// console.log(listGroup.innerText);
// console.log(listGroup.innerHTML);
// // console.log(input);
// console.log(btn);

//input type text
// =================
// input.value  => string

//input type number
// ====================
//input.value => string
//input.valueAsNumber မှသာ => number ရ

//input type date
// ==================
//input.value => date မှာထည့်တဲ့ value ၏ string ရ
// input.valueAsDate => Date obj ရ
//input.valueAsNumber => mili second နဲ့ရ
//input.valueAsDate.getFullYear() => year
//input.valueAsDate.getMonth() => month
//input.valueAsDate.getDay() => day

// Set
// =======

// const heading = document.getElementById("heading"); //<= 1.select
// heading.innerText/* => 2. get */ = "Min Ga lar Par";//=> 3. set

// const para = document.getElementById("para");
// para.innerText = "My para";

// const googleLink = document.getElementById("googleLink");
// googleLink.innerText = "My google";

// const listGroup = document.getElementById("listGroup");
// listGroup.innerHTML = '<li>Apple</><li>Orange</>';
// listGroup.innerText = '<li>Apple</><li>Orange</>'

//list ကို innerText ဆို html element ပါပေါ်
//list ကို innerHtml မှ bullet နဲ့ပေါ်

// select.innerText = "new text";****
// select.innerHTML = "<li>new </li>" <= new element ရမယ် ****

// ==========================================================

// Event
// ==========
//onclick = fun()
//ondblclick = fun()

const heading = document.getElementById("heading");


// const run = ()=>{
//     heading.innerText = "OK NA SA"
// }

// const funRun = () => {
//    heading.innerText = input.value;
//    input.value = null;
// }

// const listGroup = document.getElementById("listGroup");
// const addList = () =>{
//   listGroup.innerHTML  += `<li>${input.value}</li>`;
//   input.value = null;
// }

// ================================================
// Day47 Nov10

// console.dir(googleLink.target);

// const poeImage = document.getElementById("poeImg");
// console.dir(poeImage);
