// console.log('hi');

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log('hello ' + name);

//     }
// }
// let jk = new Person('jk', 29);
// jk.greet();

// Person.prototype.sayAge = function () {
//     console.log('i am ' + this.age);
// }
// jk.sayAge();

// let m = new Person('mukul', 20);
// let { name, age } = m;
// console.log(name);
// console.log(age);

// let personD = { ...jk, occupaton: 'cs' }
// console.log(personD);


// Practice

// function employee(id, name) {
//     this.id = id;
//     this.name = name;
//     this.greet = function () {
//         console.log('Hello ' + name);
//     }
// }

// let obj = new employee(30, 'vivek');
// obj.greet();

// JSON 


// let jsonString = JSON.stringify(jk);
// console.log(typeof jsonString, jsonString);

// let newJson = JSON.parse(jsonString);

// console.log(typeof newJson, newJson);

// let car = {
//     name: 'bmw',
//     price: 14999
// };

// let stringCar = JSON.stringify(car);
// console.log(typeof stringCar, stringCar);

// let objCar = JSON.parse(stringCar);
// console.log(typeof objCar, objCar);

// https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
        
//     }).catch(error=>console.log('error'))

//  DOM

// let heading = document.getElementById('hea');
// console.log(con);
// heading.innerHTML = 'constructor2';

// heading.setAttribute('class','min-heading');
// console.log(heading.getAttribute('id'));
// heading.removeAttribute('id');
// console.log(heading);

// heading.style.color = 'blue';
// heading.style.fontSize = '50px';

// const np = document.createElement('p')
// np.innerText = "Hello World !!!";
// console.log(np);

// heading.addEventListener('click', ()=>{
//     alert('Error');
// })

// const title = document.getElementById('hea');
// const button = document.getElementById('cb');

// button.addEventListener('click', ()=>{
//     button.innerText = 'Welcome to my Website';
//     button.style.color = "green";
//     title.style.fontSize = "40px";
// })


// let para = document.getElementById('para');
// let viewButton = document.getElementById('view-button');

// viewButton.addEventListener('click',()=>{
//     if(para.innerText === ""){
//         para.innerText += "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
//     } else {
//         para.innerText = "sdsd";
//     }
//       viewButton.style.backgroundColor = "blue";
// })

// saveButton.addEventListener('click', ()=>){
//     alert('Error');
// }

// let saveButton = document.getElementById('save-button');
// saveButton.innerHTML = 'Click';


let newtext1 = document.getElementById('newtext');
let vm = document.getElementById('vm-button');


vm.addEventListener('click',()=>{
// console.log(newtext1.innerText);
    if(newtext1.innerText === ""){
        newtext1.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa pariatur ipsum doloribus, laborum tempora.";
        vm.innerText = "view less";
    }
    else{
        vm.innerText = "view more";
        newtext1.innerText = "";
    }
})







