//If.. Else

let Hora = 10;

if(Hora > 6 && Hora < 12){
    console.log('Bom dia');
}else if(Hora > 12 && Hora < 18){
    console.log('Boa Tarde')
} else{
    console.log('Boa noite');
}


//Operador Ternario

let Saudacao = Hora > 6 && Hora < 12 ? "Bom dia" : Hora >12 && Hora < 18 ? 'Boa Tarde': "Boa noite";

console.log(Saudacao)