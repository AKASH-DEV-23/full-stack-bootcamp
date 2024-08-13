// console.log('hi');

let arr = [1,2,3];
let str  = arr.toString();
console.log(typeof str, str);


let obj = {
    value: 10,
    toString: function(){
        return 'object with value'
    },
    valueOf: function(){
        return this.value;
    }
}

console.log(String(obj));
console.log(Number(obj));

let result = '5' * 2;
console.log( typeof result, result);

let ans = '5' + 2;
console.log(typeof ans, ans);







