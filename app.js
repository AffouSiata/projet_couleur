let cont  = document.createElement('div');
let first = document.createElement('div');
let second = document.createElement('div');
let third = document.createElement('div');
let progress = document.createElement('div');
let lestrois =document.createElement('div');
let degrad = document.createElement('div');  


let grand = document.createElement('div');
let grand1 = document.createElement('div');
let grand2 = document.createElement('div');


// block1 //

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

// fin block1//



// block2//

let block2 = document.createElement("div");
let green = document.createElement("div");

let r2 = "0";
let g2 = "0";
let b2 = "0";

let progress2 = document.createElement('input');
progress2.setAttribute('type', 'range');
progress2.max= "255"

progress2.addEventListener('change' ,e =>{
    
   g2= e.target.value;
   green.style.backgroundColor=`rgb(${g2},${r2},${b2})`
})

let progress21 = document.createElement('input');
progress21.setAttribute('type', 'range');
progress21.max= "255"

progress21.addEventListener('change' ,e =>{
    
   r2= e.target.value;
   green.style.backgroundColor=`rgb(${g2},${r2},${b2})`
})

let progress22 = document.createElement('input');
progress22.setAttribute('type', 'range');
progress22.max= "255"

progress22.addEventListener('change' ,e =>{
    
  b2= e.target.value;
   green.style.backgroundColor=`rgb(${g2},${r2},${b2})`
})

//fin block2


// block3//

let block3 = document.createElement("div");
let blue = document.createElement("div");
let progress3 = document.createElement('input');
progress3.setAttribute('type', 'range');
let r3 = "0";
let g3= " 0";
let b3 = "0";
progress3.max= "255";
progress3.addEventListener('change', e =>{

    b3= e.target.value;
    blue.style.backgroundColor =`rgb(${b3},${g3},${r3})`;
})

let progress31 = document.createElement('input');
progress31.setAttribute('type', 'range');
progress31.max ="255";
progress31.addEventListener('change',e =>{
    g3=e.target.value;
    blue.style.backgroundColor=`rgb(${b3},${g3},${r3})`;
})

let progress32 = document.createElement('input');
progress32.setAttribute('type', 'range');
progress32.max ="255"
progress32.addEventListener('change',e=>{

    r3=e.target.value; 
    blue.style.backgroundColor=`rgb(${b3},${g3},${r3})`;
})

//fin block3

let grandInput = document.createElement("div");

let degrad1 = document.createElement('input');
degrad1.setAttribute('type','range');
degrad1.max="255";
 // let d1 ="yellow";
 // let d2 ="45";
degrad1.addEventListener('change',e=>{
  console.log(e.target.value);
   second.style.backgroundColor=`rgb(${e.target.value},125`;

})

let degrad2 = document.createElement('input');
degrad2.setAttribute('type','range');

let degrad3 = document.createElement('input');
degrad3.setAttribute('type','range');

let degrad4 = document.createElement('input');
degrad4.setAttribute('type','range');

let degrad5 = document.createElement('input');
degrad5.setAttribute('type','range');

let degrad6 = document.createElement('input');
degrad6.setAttribute('type','range');




// classe//
cont.classList.add("cont");
first.classList.add("first");
second.classList.add("second");
third.classList.add("third");
progress.classList.add("progress");

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
lestrois.classList.add("lestrois");
degrad.classList.add("degrad")

grand.classList.add("grand");
grand1.classList.add("grand1");
grand2.classList.add("grand2");

degrad1.classList.add("degrad1");
degrad2.classList.add("degrad2");
degrad3.classList.add("degrad3");
degrad4.classList.add("degrad4");
degrad5.classList.add("degrad5");
degrad6.classList.add("degrad6");



//afficher//
document.body.append(cont);
cont.append(first,second,third);
second.append(lestrois,degrad);
lestrois.append(block1,block2,block3);
grand.append(progress1,progress11,progress12)
grand1.append(progress2,progress21,progress22)
grand2.append(progress3,progress31,progress32)
block1.append(red,grand);
block2.append(green,grand1);
block3.append(blue,grand2);
second.append(degrad);
degrad.append(degrad1,degrad2,degrad3,degrad4,degrad5,degrad6);
