let faixas = [
    {tooptip : 'ate RS 700', minimo: 0, maximo : 700},
    {tooptip : 'ate RS 700 a 1000', minimo: 700, maximo : 1000},
    {tooptip : 'ate RS 1000 a 1500', minimo: 1000, maximo : 1500}
]


function criaFaixaPreco(tooptip, minimo, maximo){
    return { 
        tooptip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100)
]


console.log(faixas2);