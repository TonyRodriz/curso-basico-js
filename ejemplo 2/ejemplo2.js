const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
let pid= document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

const img = document.createElement('img');
img.setAttribute('src', 'https://pinethree.com/wp-content/uploads/2022/01/logo-300x157.png');

console.log(img); 

pid.append(img);
