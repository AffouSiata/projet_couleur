let cont  = document.createElement('div');
let first = document.createElement('div');
let second = document.createElement('div');
let third = document.createElement('div');
let progress = document.createElement('div');



let degrad = document.createElement('input');
degrad.setAttribute('type','range');
let d ="0"

degrad.max ="255"
let r1="0"
let g1="25"
let b1="65"
degrad.addEventListener('change', e =>{
   r1=e.target.value;
    second.style.backgroundColor=`linear-gradient(to right ,${r1} , ${g1}, ${b1})`;
})



let block1 = document.createElement("div");
let red = document.createElement("div");
let r="0"
let g="0"
let b="0"
let progress1 = document.createElement('input');
progress1.setAttribute('type', 'range');
progress1.max= "255"
progress1.addEventListener('change' ,e =>{  
    r=e.target.value; 
    red.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
})
let progress11 = document.createElement('input');
progress11.setAttribute('type', 'range');

progress11.max="255"
progress11.addEventListener('change', e =>{
    g=e.target.value;
    red.style.backgroundColor= `rgb(${r}, ${g}, ${b})`
})
let progress12 = document.createElement('input');
progress12.setAttribute('type', 'range');
progress12.max="255"
progress12.addEventListener('change',e=>{
    b=e.target.value;
        red.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
    })
// progress1.style.backgroundColor="red";
// let progress1 = document.createElement('input');
// progress1.setAttribute('type', 'range');
// progress1.setAttribute('type', 'range');
// progress1.setAttribute('type', 'range');
// let progress1 = document.createElement('input');
// progress1.setAttribute('type', 'range');
// let progress1 = document.createElement('input');
// progress1.setAttribute('type', 'range');



let block2 = document.createElement("div");
let green = document.createElement("div");

let progress21 = document.createElement('input');
progress21.setAttribute('type', 'range');
let progress22 = document.createElement('input');
progress22.setAttribute('type', 'range');
let progress2 = document.createElement('input');
progress2.setAttribute('type', 'range');
progress2.max= "255"

progress2.addEventListener('change' ,e =>{
    
    console.log(e.target.value);
   green.style.backgroundColor=`rgb(255, ${e.target.value}, 30)`
})



let block3 = document.createElement("div");
let blue = document.createElement("div");

let progress31 = document.createElement('input');
progress31.setAttribute('type', 'range');

let progress32 = document.createElement('input');
progress32.setAttribute('type', 'range');
let progress3 = document.createElement('input');
progress3.setAttribute('type', 'range');

let grandInput = document.createElement("div");



// classe//
cont.classList.add("cont");
first.classList.add("first");
second.classList.add("second");
third.classList.add("third");
progress.classList.add("progress");


degrad.classList.add('degrad');

block1.classList.add("block1");
red.classList.add("red");
progress1.classList.add("progress1");

block2.classList.add("block2");
green.classList.add("green");
progress2.classList.add("progress2");

block3.classList.add("block3");
blue.classList.add("blue");
progress1.classList.add("progress3");

grandInput.classList.add("grandInput");
let grand = document.createElement('div');
grand.classList.add("grand");
let grand1 = document.createElement('div');
grand1.classList.add("grand1");
let grand2 = document.createElement('div');
grand2.classList.add("grand2");

//afficher//
document.body.append(cont);
cont.append(first,second,third);
second.append(block1,block2,block3);
second.append(degrad);
grand.append(progress1,progress11,progress12)
grand1.append(progress2,progress21,progress22)
grand2.append(progress3,progress31,progress32)
block1.append(red,grand);
block2.append(green,grand1);
block3.append(blue,grand2)


