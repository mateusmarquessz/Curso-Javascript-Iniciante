const criarCelular = {
    marcaCelular : 'ASUS',
    tamanhoTela:{
        vertical : 155,
        horizontal : 75
    },
    ligar : function(){
        console.log("Fazendo ligacao")
    }
}

//clonando Objeto
const novoObjeto = Object.assign({
    //nova propriedade com o novo objeto
    bateria : '5000'
},celular);

console.log(novoObjeto);

const novoObjeto2 ={...criarCelular};

console.log(novoObjeto2);