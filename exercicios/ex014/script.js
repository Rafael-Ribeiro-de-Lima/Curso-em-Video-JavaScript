function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'imagens/manha-transp.png'
        document.body.style.background = '#fbde3a'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'imagens/tarde-transp.png'
        document.body.style.background = '#fbb52f'
    } else{
        // Boa noite
        img.src = 'imagens/noite-transp.png'
        document.body.style.background = '#213d4b'
        
    }
}

