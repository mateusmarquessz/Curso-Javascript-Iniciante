const numeros = [1,2,3];

//Numero no comeco do array
numeros.unshift(0)
console.log(numeros[0]);

//Meio
numeros.splice(2,0,1.5);
console.log(numeros);

//Final
numeros.push(5);
console.log(numeros);



const letras = ['a', 'b','c']

letras.unshift(1);
console.log(letras);

letras.splice(2,0,2);
console.log(letras);

letras.push('d');
console.log(letras);