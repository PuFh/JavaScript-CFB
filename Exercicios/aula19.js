//Entenda as declarações BREAK e CONTINUE em Javascript

let n =0
let max=1000
let pares=0
let impares=0

/*while(n<max){
    console.log("Valor da Variável: "+n)
    if(n>10){
        break
    }
    n++
}*/

for(let i=n;i<max;i++){
    console.log("Valor da Variável: "+i)
    if(i%2==0){
        pares++
        continue
    }else{
        impares++
    }
}
console.log("Números Pares: "+pares)
console.log("Números Impares: "+impares)
console.log("FIM DO PROGRAMA")