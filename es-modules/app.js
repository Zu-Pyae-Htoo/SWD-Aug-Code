// No1
// Modules import
// =================
// data.js and run.js ကနေ export လုပ်ထားဖို့လို။ <script> type မှာ module ပေးထားဖို့လို



import * as data from "./js/data.js";
import * as run from "./js/run.js";

// No2
//<---- Destructure Modules------>
// ==================================

import {myAge} from "./js/data.js";
import {myName,myWork} from "./js/run.js";

// console.log(data.myAge);
// console.log(run.myName);
// console.log(run.myWork);

// console.log(myAge);
// console.log(myName);
// console.log(myWork);

//No3
// export default Modules
// ======================
//Class တခုတည်းရှိတဲ့ချိန် function တခုတည်းရှိတဲ့ချိန် export default  သုံးတယ်။

import area, { circle } from "./js/area.js";
import Person from "./js/Person.js";


// console.log(area(20,20));
// console.log(circle);
const p1 = new Person;


