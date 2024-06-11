//receber uma quantidade de valores para avaliar
//Funcao exibe se cada valor e par ou impar

function exibirTipo(limite){
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i, 'Par');
        } else {
            console.log(i, 'Impar');
        }
    }
}

exibirTipo(5);