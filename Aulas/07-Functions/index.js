//Function == tipo de referencia
//Ela faz parte da base de todo software

//nomeando funcao

//Verbo + Substantivo
//resetarCor

let corSite = "Azul";

//function resetarCor(){ 
//    corSite = 'a';
//}
//console.log(corSite);
//Chamando function
//resetarCor();
//console.log(corSite);

function resetarCor(cor, tonalidade){ 
    corSite = cor + tonalidade;
}

console.log(corSite);
resetarCor("Vermelho", " claro")
console.log(corSite);