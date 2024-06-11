//Velocidade maxima de 70
//a cada 5km acima do limite voce ganha 1 ponto na carteira
//function Math
//caso os pontos maior que 12
function verificarVelocidade(velocidade){
    const kmPorponto = 5;
    if(velocidade <= 70){
        return console.log("ok");
    }else{
        const pontos = Math.floor(((velocidade - 70)  / kmPorponto));
        if(pontos >=12){
            console.log('Carteira Suspensa');
        }else{
            console.log('Pontos', pontos);
        }
    }
}

verificarVelocidade(70);
