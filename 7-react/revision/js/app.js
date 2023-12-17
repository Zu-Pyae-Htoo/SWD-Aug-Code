const fruits = ["apple", "orange", "mango", "banana"];

// console.log(fruits);
// fruits.splice(2, 1);

const newFruits = fruits.filter((el) => el != "mango");
// console.log(fruits);
// console.log(newFruits);

//add lemon

// fruits.push("lemon");
// console.log(fruits);

// const newFruits = [...fruits, "lemon"];
// console.log(fruits);
// console.log(newFruits);

const obj = { a: "aaa", b: "bbb", c: "ccc" };
// console.log(obj);
// obj.d = "ddd";
// obj["e"] = "eee";
// console.log(obj);

// const newObj = { ...obj, d: "ddd" };
// console.log(obj);
// console.log(newObj);

const newObj = { ...obj, b: "xxx" };
// console.log(obj);
// console.log(newObj);
