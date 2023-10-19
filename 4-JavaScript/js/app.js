// console.log("js app");

// const myName = "Zu Pyae Htoo";
// let age = 25;

// console.log(`My name is ${myName} and I'm ${age} years old`);

// let x = 5;

// console.log(x);
// function triangle(){
//     console.log('*');
//     console.log('* *');
//     console.log('* * *');

//     return 'triangle'

// }

// console.log(triangle())

// triangle();
// triangle();

// function run(x=0, y=0) {
// //   console.log(x);
// //   console.log(y);
//   return x + y;
// }

// console.log(run(10, 20));
// console.log(run());

// const record = [];
// let recordIndex =0;

// function roomArea(width, breadth) {
//   const result = width * breadth + " Sqft";
//   records[recordIndex++] ={
//     width : width + " ft" ,
//     breadth : breadth + " ft" ,

//   }
//   return width * breadth + " Sqft";
// }

// console.log(roomArea(16, 70));
// console.log(roomArea(25, 70));

// let usdRate = 2100;
// let sgdRate = 1534;
// let eurRate = 2210;

// function usdToMmk(amount){
//     return amount * usdRate + ` mmk`;
// }

// function sgdToMmk(amount){
//     return amount * sgdRate + ` mmk`
// }

// function eurToMmk(amount){
//      return amount * eurRate + ` mmk`;

// }

// console.log(usdToMmk(1900));
// console.log(sgdToMmk(2100));
// console.log(eurToMmk(1700));

// function mmkToUsd(amount){
//     return amount/usdRate + ` USD`;
// }

// function mmkToSgd(amount){
//     return amount/sgdRate + ` SGD`;
// }

// function mmkToEur(amount){
//     return amount/eurRate + ` EUR`;
// }

// console.log(mmkToUsd(1000000));
// console.log(mmkToSgd(1000000));
// console.log(mmkToEur(1000000));

// let applePrice = 500;
// let orangePrice = 300;
// let total=0 ;
// function apple(quantity){
//     const cost = applePrice * quantity;
//     total += cost;
//     return `Apple * ${quantity} = ${cost} mmk`;
// }

// function orange(quantity){
//     const cost = orangePrice * quantity ;
//     total += cost;
//     return ` Orange * ${quantity} = ${cost} mmk`;
// }

// function totalCost (){
//     return `Total cost is = ${total} mmk`;
// }

// function tax(percentage = 5){
//     return total * percentage /100 ;
// }

// function taxPrint(){
//     return `Tax = ${tax()} mmk`;
// }

// function netTotal(){
//     return `Net total = ${tax() + total} mmk`
// }

// console.log(apple(3));
// console.log(orange(5));
// console.log(totalCost());
// console.log(taxPrint());
// console.log(netTotal());

//=============================================================================

// const shop = ["apple", "orange", "mango"];

// console.log(typeof shop);
// console.log(shop);

// shop[0] = "banana"
// shop[3] = "lime"
// shop[4] = "lemon"

// console.log(shop[0]); // access element
// console.log(shop[1]);
// console.log(shop[2]);
// console.log(shop[3]);

// console.log(shop);

// const arr = [];

// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";
// arr[3] = "d";

// arr[7] = "e";

// console.log(arr);
// console.log(arr.length);

// const myself = ["hhz",28,"Hlaing","Developer",false]

// const mySelf = {
//   name: "HHZ",
//   age: 28,
//   town: "Hlaing",
//   job: "Developer",
//   relationShip: false,
// };

// // console.log(mySelf);
// // console.log(mySelf.name);
// // console.log(mySelf.age);

// // console.log(
// //   `My name is ${mySelf.name} and ${mySelf.age} years old from ${mySelf.town}`
// // );

// mySelf.name = "Ko Htet";
// mySelf.netWorth = ["bahan Home", "hledan condo", "MMS IT"];

// // console.log(mySelf.name);
// // console.log(mySelf);

// // const obj = {};

// // obj.a = "x";
// // obj.b = "y";
// // obj.c = "z";

// // console.log(obj);

// // console.log([]);
// // console.log({});

// const kyawKyawinfo = {
//   name: "Kyaw Kyaw",
//   age: 18,
//   township: "Hlaing",
//   pocketMoney: 1500,
//   isHeSmoke: true,
// };

// const suSuInfo = {
//   name: "Su Su",
//   age: 18,
//   township: "Hlaing",
//   pocketMoney: 1000,
//   isHeSmoke: false,
// };

// const zawZawInfo = {
//   name: "Zaw Zaw",
//   age: 18,
//   township: "Hledan",
//   pocketMoney: 1000,
//   isHeSmoke: false,
// };

// const students = [kyawKyawinfo, suSuInfo,zawZawInfo];

// console.log(students);
// console.table(students);

const rates = {
  usd: 2100,
  sgd: 1530,
  eur: 2210,
};

//

// function toMmk(amount, currency) {
//   const exchangeRate = rates[currency];
//   const result = amount * exchangeRate;
//   return result + " mmk";
// }

// console.log(toMmk(200, "usd"));
// console.log(toMmk(450, "sgd"));
// console.log(toMmk(15, "eur"));

// function toCurrency(mmkAmount, currency) {
//   const exchangeRate = rates[currency];
//   const result = mmkAmount / exchangeRate;
//   //return result + " " + currency;
//   return `${result} ${currency}`;
// }

// console.log(toCurrency(500000, "usd"));
// console.log(toCurrency(700000, "sgd"));
// console.log(toCurrency(50000, "eur"));

// 500 usd t0 sgd
// 10000 mmk to eur
// 30 eur to sgd100 sgd to eur
// any currency to any currency
// record keeping

// const fruits = {
//   apple: 500,
//   orange: 700,
//   mango: 1000,
//   banana: 200,
// };

// const transitions =[];
// let transitionIndex = 0;
// let total = 0;

// cost = item price * quantity

// function buy(item, quantity) {
//   const price = fruits[item];
//   const cost = price * quantity;
//   total += cost;
//   transitions[transitionIndex++] = {
//     item,
//     price,
//     quantity,
//     cost
//   }

// }

// console.log(buy("apple", 5));
// console.log(buy("mango", 2));
// console.log(buy("banana", 15));
// console.log(buy("orange", 3));

// console.table(transitions);
// console.log("total",total);
// console.log("tax", calcTax(total));

const obj = {
  a: "aaa",
  b: "bbb",
  c: "ccc",
  // es 5 and early

  d: function () {
    return "this is d";
  },

  // es 6 and above

  e() {
    return "this is e";
  },
};

// console.log(obj);
// console.log(obj);
// console.log(obj);
// console.log(obj);
// console.log(obj);

const myObj = {
  name: "zph",
  age: 25,
  township: "hlaing",
  job: "developer",

  //methods

  teach() {
    return `${this.name} can teach nothing`;
  },
  eat() {
    return `${this.name} can eat anything`;
  },
};

// property access
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.job);

//property overwrite
myObj.name = "Lee min ho";

// method

// console.log(`something ${(function(){
//   console.log("IIFE");
//   return "IIFE";
// })()}`);

// function run(){
//   let x = 5;
// console.log(x);
// }
// run()

// console.log(x);
// const x = 5;

// console.log(y());
// function y(){
//   return "Y"
// }

// console.log(z());
// const z = function (){
//   return 'z';
// }

// const x = [];
// const y = {};
// const z = x;
// console.log(z);

// x[0] = "a";
// x[1] = "b";

// console.log(z);

// let pocketMoney = 15000;

// pocketMoney > 5000 ? console.log("watch movie") : console.log("go to school");


// Comparison Operators
// let x = 5;
// let y = 5;
//  console.log(x == y);

// let x =[];
// let y = [];
// console.log(x == y); false <=== Heap Memory address are different

// Strip equality operator

// const a =5;
// const b = "5";

// console.log(a == b);
// console.log(a === b);

// console.log(a+b);

// Ternary Operator
// const money = 10000;
// money > 50000 ? console.log('go to bar'):console.log('sleep');


//================================================================================
// Day-37 Oct/18/2023

// condition statement

// if(false){
//   console.log("I'm True");
// }
// else {
//   console.log("I'm false");
// }

// const wakeTime = 11;
// if(wakeTime>=8){
//   console.log("kyane lone nae hti p");
// }else{
//   console.log("cool");
// }

// const money = 1000;
// const busFees = 300;
// if(money >= busFees *2){
//   console.log("go to school with bus");
// }else{
//   console.log("go to school by walk");
// }

// const classStart = 10;
// const currentTime = 9;
// if(currentTime >= classStart){
//   console.log("Start teaching");
// }else{
//   console.log("Waiting student");
// }

// const mark = 50;

// if(mark >= 80){
//   console.log("distinction");
// }else if(mark >= 40){
//   console.log("passed");
// }else if(mark < 40){
//   console.log("fail");
// }

// function result(mark) {
//   if (mark >= 80) {
//     return "distinction";
//   } else if (mark >= 40) {
//     return "passed";
//   } else if (mark < 40) {
//     return "fail";
//   }
// }

// console.log(result(50));
// console.log(result(30));
// console.log(result(70));
// console.log(result(85));

// function requestMoney (amount,busFees = 300){
//   if(amount > busFees * 2){
//     return "It is enough to go school with bus"
//   }else{
//     return "by walk";
//   }
// }

// console.log(requestMoney(500));
// console.log(requestMoney(1500));

// function canIPassed(examMark, viperMark) {
//   if (examMark >= 60 && viperMark >= 60) {
//     return "U can join our University";
//   }
//   return "U can't join";
// }

// console.log(canIPassed(75,30));
// console.log(canIPassed(75,60));
// console.log(canIPassed(67,76));

// function canIVote(nrcType,age){
//   if(nrcType === "N" && age >= 18){
//     return "U can vote";
//   }
//   return "U can't vote"
// }

// console.log(canIVote("N",3));
// console.log(canIVote("N",13));
// console.log(canIVote("N",25));
// console.log(canIVote("M",25));
// console.log(canIVote("F",25));

function bus(no) {
  if (no === 65 || no === 20) {
    return "U will reach MMS IT Kyauk Myaung";
  }
  return "U will not reach";
}

// console.log(bus(65));
// console.log(bus(55));
// console.log(bus(20));
// console.log(bus(30));

// console.log(!!!true);

// =============================================
//#####Day-38 Oct/18/2023

// for loop

      // for (let i = 1; i <= 5; i++) {
      //   console.log("*");
      //   console.log("**");
      //   console.log("***");
      // }

      // 1 to 10
      // 1 ,3 ,5 ,7 ,9

      // for(let i = 1; i <= 10; i++){
      //   console.log(i);
      // }

      // for(let i = 1; i <= 10; i +=2){
      //   console.log(i);
      // }

      // 1 to 100
      // 10,20,30,40,.., 100

      // for (let i = 10; i <= 100; i += 10) {
      //   console.log(i);
      // }

// =======================Statement Proof // Loop ပတ်ပုံ============================

      // for (
      //   let i = (function () {
      //     console.log("State 1");
      //     return 1;
      //   })();
      //   (function () {
      //     let boo = i <= 5;
      //     console.log("state 2 is ", boo);
      //     return boo;
      //   })();
      //   (function () {
      //     console.log("state 3 ");
      //     return i++;
      //   })()
      // ) {
      //   console.log("code block", i);
      // }

// ===============================================

//stop at 5 (break)
// skip at 5 (continue)



      // for (let i = 1; i <= 10; i++) {
      //   // console.log("code block", i);

      //   // if (i === 5) {
      //   //   break;
      //   // }

      //   if (i === 5) {
      //     continue;
      //   }

      //   console.log("code block", i);
      // }

// =========================================
// ++++++Array and Obj Loop++++


      // const fruits = ["apple","orange","mango","lemon","lime"]


      // const fruits = ["apple", "orange", "banana", "mango", "lime", "lemon"];
      // for (let i = 0; i <= fruits.length; i++) {
      //   console.log(i, fruits[i]);
      // }

      // console.log(i);

//New Loop

//========Array Loop for( of )=======
//==========No Index in array loop===========
      
      // for(let fruit of fruits){
      //   console.log(fruit);
      // }

// ========Array Loop for( in )=======
// ========For ++Array Loop++ with ++Index++=======
// ========like key and value in obj =======

    // for(let key in fruits){
    //   console.log(key,fruits[key]);
    // }

    // for(let fruit in fruits){
    //   console.log(fruit,fruits[fruit]);
    // }

// ========Obj Loop for( of )=======
// const chars ={
//   a:"aa",
//   b:"bb",
//   c:"cc",
//   d:"dd",
// }

// for(let key in chars){
//   console.log(key,chars[key]);
// }




