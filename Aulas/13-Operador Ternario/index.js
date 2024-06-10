//operador ternario
//Server para comparacoes sem ser os IF e ElSE

//Tem um cliente, > 100 premium, comum
let pontos  = 100;
let tipo = pontos //> 100 ? 'Premium' : 'Comum';

console.log(tipo);

//maneira com if e else
if(pontos > 100){
    console.log("Premium");
} else{
    console.log("Comum");
}