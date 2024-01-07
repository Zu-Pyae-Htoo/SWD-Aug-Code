const numbers = [4, 2, 5, 3, 2, 7, 1, 4];

// total of numbers array

//imperative

// let total = 0;

// for (x of numbers) {
//  total += x;
// }

// console.log(total);

//declarative

// console.log(numbers.reduce((pv, cv) => pv + cv));

// remove duplicate element

// const result = [];
// for (x of numbers) {
//   if (!result.includes(x)) {
//     result.push(x);
//   }
// }
// console.log(result);

// const newResult = new Set(numbers);
// console.log(newResult);

// remove odd number from arr

// let result = [];
// for(x of numbers){
//     x%2 === 0 && result.push(x);
// }
// console.log(result);

// console.log(numbers.filter(x => x%2 == 0));

// const newMap = (arr, fun) => {
//   const newArr = [];
//   for (x of arr) {
//     newArr.push(fun(x));
//   }

//   return newArr;
// };

// console.log(newMap(numbers, el => el*2));

// const run = (arr, condition) => {
//   const result = [];
//   for (x of arr) {
//     if (condition(x)) {
//       result.push(x);
//     }
//   }
//   return result;
// };

// const test = (el) => el % 2 === 0;
// console.log(run(numbers, (el) => el % 2 === 0));
// console.log(run(numbers,test));
