// console.log("hola")

// const no cambia de valor
// let   
// var


/*  aprendiendo prompt-sync
const prompt =require('prompt-sync')();

let edad = prompt('cuantos años tienes?: ');
edad = parseInt(edad);

if( edad>=18){
    console.log("Mayor")
}
else{
    console.log("Menor")
} */
const prompt =require('prompt-sync')();
let n = prompt('Input: ');
n = parseInt(n)
let resultado =0;

for (let index = 0; index <=n; index++) {
    resultado +=index;
}
 
console.log(resultado)