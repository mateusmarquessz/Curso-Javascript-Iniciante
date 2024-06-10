const pessoa = {
    nome:'Mateus',
    idade: 21 ,
};

//key-value
//assim eu pego as informacoes do Objeto
for(let chave in pessoa){
    console.log(chave, pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde']


for (let indice in cores){
    console.log(indice, cores[incide]);
}