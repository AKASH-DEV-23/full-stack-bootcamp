console.log(5);

const btn = document.getElementById('btn');
console.log(btn);

const text = document.getElementById('text');

const para = document.getElementById('para');

// let newpara = document.createElement('<button>Sign up</button>')

const heading = document.getElementById('heading');

const changetext = ()=>{
    text.style.color = 'green';
}

function fun() {
    btn.innerText = 'Changed';
}

heading.addEventListener('click', fun());

btn.addEventListener('click',changetext);

btn.addEventListener('click',()=>{
    btn.innerText = 'Hello World';

    
});


