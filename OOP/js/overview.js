console.log("JS OOP");

//class vs obj
//classes - template of obj
//Human - name , date of birth, gender
//std1 - name: "mg mg", dob : 1995 , gender : "male"

class Person{
    name;
    dob;
    gender;
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

const p1 = new Person;

//data initialize
// p1.name = "mg mg";
// p1.dob = "1995";
// p1.gender = "male";
console.log(p1);
// console.log(p1.eat()); ==> instance ဆောက်ပြီး 
// console.log(p1.sleep());

const p2 = new Person;
p2.name = "Su Su";
p2.dob = "2000";
p2.gender = "female";
console.log(p2);


// console.log(Person);