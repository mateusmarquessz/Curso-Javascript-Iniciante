const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela:{
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log("Fazendo ligacao")
    }
}
//Factory Functions
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
   return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar(){
        console.log("Fazendo ligacao")
    }
   }
}

const celular1 = criarCelular('Apple', 5.5, 5000);

console.log(celular1);

const carro = {
    marcaCarro : 'Ford',
    corCarro : 'Vermelho',
}


function criarCarro(marcaCarro, corCarro){
    return{
    marcaCarro,
    corCarro}
}

const Carro1 = criarCarro('fiat', 'azul');

console.log(Carro1);