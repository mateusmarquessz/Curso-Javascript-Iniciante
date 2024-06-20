const mouse = {
    cor : "Azul",
    marca : "Razer",
}
//criando uma nova propriedade no objeto, pois o javascript e dinamico
mouse.velocidade = 5000;

mouse.TrocarDpi = function() {
    console.log('Mudando DPI');
}
console.log(mouse);
delete mouse.velocidade;
console.log(mouse);
delete mouse.TrocarDpi;
console.log(mouse);