//Loops FOR IN e FOR OF em Javascript

const objs=document.getElementsByTagName("div")

let num=[10,20,30,40,50,60]

/*lenght é a propriedade que me retorna o comprimento.
Ou seja, vai me retorna quando número tem dentro do array, nesse caso.
*/
/*for(i=0; i<num.length; i++){
    console.log(num[i])
} */

/*for(n in num){
   console.log(n)
    }*/
for(o of objs){
    console.log(o.innerHTML="Tome")
}
for(o in objs){
    console.log(objs[o].innerHTML)
}
for(let i=0; i<objs.length; i++){
    console.log(objs[i])
}
// O For in pega a posição dos elementos, o for of pega os valores de cada possição
