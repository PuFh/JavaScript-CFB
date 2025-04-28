//FUNÇÕES parametrizadas em Javascript #P3
const valor_padrao=0

function add(v){
    valor+=v
}

let valor=0
console.log(valor)

add(10)
console.log(valor)

add(5)
console.log(valor)




function soma(n1=valor_padrao,n2=valor_padrao){
    let res
    res=n1+n2
    return res

}
let resultado_soma = soma(10,5)
