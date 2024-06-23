function endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new endereco('a','b', 'c');
const endereco2 = new endereco('a','b', 'c');

function saoIguais(endereco1,endereco2){

    for(let chave in endereco1)
    if(endereco1.hasOwnProperty(chave) && endereco2.hasOwnProperty(chave)){
        let valor1 = endereco1[chave];
        let valor2 = endereco2[chave];


        if(valor1 === valor2){
            return true
        } else{
            return false
        }
    }
}


function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log(saoIguais(endereco1,endereco2))