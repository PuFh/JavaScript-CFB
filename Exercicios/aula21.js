//FUNÇÕES com retorno em Javascript #P2 
let num
function canal(){
    let n1 = 10
    let n2 = 2
    let res = n1*n2
    if(res%2==0){
        return "O valor é Par"
    }else{
        return"O valor é Impar"
    }
}
num = canal()
console.log(num)