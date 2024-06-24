const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
];

//Function normal
var valor = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

//Arrow function
var valor = marcas.find((marca) =>{
    return marca.nome === 'a';
});

//deixando mais curto 
console.log(marcas.find((marca) =>{marca.nome === 'a';}))