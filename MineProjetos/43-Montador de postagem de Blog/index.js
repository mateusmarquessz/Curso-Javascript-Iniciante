//Eu quero que vc crie neste exercicio um objeto de postagem de um blog que vai conter as seguintes propriedades
/*
titulo
mensagem
autor
vizualicacoes
comentarios
    autor, mensagem
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor : 'c',
    visualizacoes : 10,
    comentarios: [
        {autor : 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);