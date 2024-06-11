//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBull
//Nao divisivel por 3 ou 5 => entrada
//Nao e um numero = 'nao e um numero'

const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Nao e um numero';
    }
    if(entrada % 3 === 0){
        return 'Fizz';
    }
    if(entrada % 5 === 0){
        return 'Buzz';
    }
    if(entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz';
    }
    return(entrada);
}