function VerificarEntrada(){
    nomeConvidado = document.getElementById('nome').ariaValueMax;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael','Jonas','Carol','Mateus'];
    if(ConvidadosCristian.include(nomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce pode entrar!'
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce nao pode Entrar!'
    }
}