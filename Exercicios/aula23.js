//Parâmetros REST em funções Javascript #P4

function soma(...valores){
    let res=0

    for(v of valores){
        res+= v
    }
    return res
}
console.log(soma(10,5))