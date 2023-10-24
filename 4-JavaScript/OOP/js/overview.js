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

class Person{
    // name;
    // dob;
    // gender;
    // constructor(x,y){
    //     //constructor က obj instance ဆောက်တာနဲ့ အလုပ်လုပ်တယ်
    //     console.log("I'm constructor",x,y); 
    // }

    // constructor (){  <===== constructor မှာ value အပြီးသတ်မှတ်လို့မရ
    //     this.name = "Mg Mg",
    //     this.dob = "1995",
    //     this.gender = "male"}

    constructor(name,dob,gender){
        this.name = name,
        this.dob = dob,
        this.gender = gender
    }
    eat(){
        return "Person can eat";
    }
    sleep(){
        return "Person can sleep";
    }
}

//class  => obj (instantiate)/ instance ဆောက် ==> class ကိုသုံးချင်ရင် obj ကို instance ဆောက်သုံး

//method

// console.log(Person.eat()); ===> instnace မဆောက်ထားရင် ခေါ်သုံးလို့မရ

const p1 = new Person("Mg Mg","1995","male");
console.log(p1);

const p2 = new Person("Su Su","2000","female");
console.log(p2);

const p3 = new Person("Shin Shin","1999","female")
console.log(p3);

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