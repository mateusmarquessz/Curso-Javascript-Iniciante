const criarCelular = {
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

//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligacao");
    }
}

const celular = new Celular('Apple', 5.5, 5000);

console.log(celularn)