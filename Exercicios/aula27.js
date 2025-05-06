//Funções Geradoras em Javascript

function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'azul'
}

let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)