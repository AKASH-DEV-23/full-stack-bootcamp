// console.log(5);

// let a = ["a", "b", "c"];
// a.push("d");
// console.log(a);
// a.unshift("e");
// console.log(a);

// a.shift();
// console.log(a);
//  a.pop();

let bike = ["honda", "bmw", "bjaj", "kawasaki"];
// let car = ["maruti", "audio", "scorpio"];

// let allV = bike.concat(car);
// console.log(allV);

// let sliceB = bike.slice(1, 2);
// console.log(sliceB);

// bike.splice(1,1,'kl','kl');
// console.log(bike);

// console.log(bike.indexOf('bmw'));

// console.log(bike.lastIndexOf('bjaj'));

console.log(bike);

// bike.forEach(bike => console.log(bike));

// let len = bike.map(bike => bike.length);

// console.log(len);

// for(let i = 0; i< bike.length;i++){
//     console.log(bike[i]);
// }

// for(let i of bike){
//     console.log(i);
// }

// let vk = bike.filter(bike => bike.length>3);
// console.log(vk);

// let jk = bike.reduce((sum,bik) => sum+bik.length,0);
// console.log(jk);

//  2D Array

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[2][2]);

console.log(matrix[1][0]);


// IMP Spread and rest destructing 


//  (...) spread operators => expand the array

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);
console.log(arr1);

// (...) rest operator

function sum(...number) {
  return number.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

// destructing array

let [first, second, third] = bike;
console.log(first);
console.log(second);

//  array membership

console.log(bike.includes("bmw"));

//  sorting arrays

console.log(bike);

const y = bike.sort();
console.log(y);

let num = [10, 20, 30, 111];

let max = Math.max(...num);
let min = Math.min(...num);
console.log(max);
console.log(min);