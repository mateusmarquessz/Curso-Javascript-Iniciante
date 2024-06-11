//Crie uma funcao que exibe a quantiade de *
//que a linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    let i = 1;
    for(i; i<=linhas; i++){
        let padrao = '';
        for(let j = 0; j<i; j++){
            padrao += '*';
        }
        console.log(padrao)
    }
}