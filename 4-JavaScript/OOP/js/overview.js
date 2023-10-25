console.log("JS OOP");

//class vs obj
//classes - template of obj
//Human - name , date of birth, gender
//std1 - name: "mg mg", dob : 1995 , gender : "male"

// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc",
//     x(){
//         return this.a
//     }
// }

class Person {
  name;
  dob;
  gender;
  //   constructor(x,y){
  //       //constructor က obj instance ဆောက်တာနဲ့ အလုပ်လုပ်တယ်
  //       console.log("I'm constructor",x,y);
  //   }

  //   constructor (){
  //     //<===== constructor မှာ value အပြီးသတ်မှတ်လို့မရ
  //       this.name = "Mg Mg",
  //       this.dob = "1995",
  //       this.gender = "male"}

  constructor(name, dob, gender) {
    //data initialize
    (this.name = name), (this.dob = dob), (this.gender = gender);
    this.namePrefix = this.gender == "male" ? "Mg" : "Ma";
    this.age = 2023 - this.dob;
  }
  //   intro() {
  //     //my name is zph and i was born in 1994;
  //     return `My name is ${this.namePrefix} ${this.name} and I was born in ${this.dob} `;
  //   }
  //   eat() {
  //     return "Person can eat";
  //   }
  //   sleep() {
  //     return "Person can sleep";
  //   }
}

class Student extends Person {
  constructor(name, dob, gender, sub, major) {
    super(name, dob, gender);
    this.major = major;
    this.sub = sub;
  }
}

// const st1 = new Student("Zaw Zaw", 1996, "male","web",["html,css,javaScript "]);
// console.log(st1);

// const st2 = new Student("Mya Mya",2000,"Female","android",["Java","Kotlin"])
// console.log(st2);
//class  => obj (instantiate)/ instance ဆောက် ==> class ကိုသုံးချင်ရင် obj ကို instance ဆောက်သုံး

//method

// console.log(Person.eat()); ===> instnace မဆောက်ထားရင် ခေါ်သုံးလို့မရ

// const p1 = new Person("Kyaw Kyaw","1995","male");
// console.log(p1);

// const p2 = new Person("Su Su","2000","female");
// console.log(p2);

// const p3 = new Person("Shin Shin","1999","female")
// console.log(p3);
// console.log(st2);

//data initialize
// p1.name = "mg mg";
// p1.dob = "1995";
// p1.gender = "male";
// console.log(p1);
// console.log(p1.eat()); ==> instance ဆောက်ပြီး
// console.log(p1.sleep());

// const p2 = new Person;
// p2.name = "Su Su";
// p2.dob = "2000";
// p2.gender = "female";
// console.log(p2);

// console.log(Person);

// class Monitor extends Student{
//     constructor(name, dob, gender, sub, major,roomNo){
//         super(name, dob, gender, sub, major)
//         this.roomNo = roomNo;
//     }
// }

// const monitor = new Monitor("ko ko",1998,"male","web",["js","java"],"SWDAug");
// console.log(monitor);

// =========================================
// Day-41 Oct24/2023

// OOP - access modifier
// ===========================
// console.log(m1.name);

// class Sample{
//     a = "aaa";
//     #x = "xxx";

//     b(){
//         return "b method";
//     }
//     #y() {
//         return "y method"
//     }
// }

// const sample = new Sample;
// console.log(sample);
// console.log(sample.a);
// console.log(sample.#x);
// console.log(sample.b());
// console.log(sample.#y());

// class BankAccount {
//   // constructor(balance){
//   //     this.balance = balance;
//   // }

//   #balance = 0;
//   #transaction =[];
//   #transactionIndex = 0;

//   checkTransaction(){
//     return this.#transaction;
//   }

//   // getter , setter
//   // getter
//   checkBalance() {
//     return this.#balance;
//   }
//   // setter
//   deposit(amount) {
//     this.#transaction[this.#transactionIndex++]=`You deposit ${amount}`
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     if(amount < this.#balance){
//         this.#transaction[this.#transactionIndex++]=`You withdraw ${amount}`
//       return  this.#balance -= amount;
//     }
//     this.#transaction[this.#transactionIndex++]=`Insufficient balance`
//     return "Insufficient Balance";
// }

//   constructor(owner, phone) {
//     this.owner = owner;
//     this.phone = phone;
//     this.accountNo = this.owner + this.phone;
//   }
// }

// const myBankAccount = new BankAccount(100);
// myBankAccount.balance = 600;
// console.log(myBankAccount.balance);

// const myBankAccount = new BankAccount("ZPH",1234321);
// console.log(myBankAccount);

// myBankAccount.deposit(1000);
// myBankAccount.deposit(4000);
// myBankAccount.deposit(5000);

// myBankAccount.withdraw(500);
// myBankAccount.withdraw(1e5);

// console.log(myBankAccount.checkBalance());
// console.table(myBankAccount.checkTransaction());

// class A{
//     #x = "xxx";
//     y = "yyy"
// }

// class B extends A {
//     z(){
//         return this.y;
//         // return this.#x; <= Parent က private fields တွေက extends class ဆီကို မပါသွားဘူး။
//     }
// }

// const b = new B;
// console.log(b.z());

// Static
// ========

// class C {
//     static a = "aaa";
//     b = "bbb";
//     static x(){
//         return "x method";
//     }
//     y(){
//         return "y method";
//     }
// }
// console.dir(C)
// console.log(C.a);
// console.log(C.x());

// const c = new C;
// console.log(c);
// console.log(c.b);