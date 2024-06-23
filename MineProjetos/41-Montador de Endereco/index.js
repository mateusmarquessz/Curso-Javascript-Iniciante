//Criar um objeto endereco que contem:
//Rua
//Cidade
//CEP
//Function exibirEndereco(endereco);



let endereco = {
    Rua : 'Rua Canapes',
    Cidade : 'Sao Paulo',
    Cep : "38234-231"
}

function exibirEndereco(endereco){
    for(let chave in endereco)
    console.log(chave,endereco[chave]);
}

exibirEndereco(endereco)