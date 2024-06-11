//Criar um metodo para ler propriedades de um objeto e
//Exibir somente as propriedades do tipo String que estao nesse objeto

const filme = {
    titulo : 'Vigadores',
    ano : 2018,
    diretor : 'Mefiu',
    personagem : 'Thor'
}
function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop]);
        }
    }
}
exibirPropriedades(filme);