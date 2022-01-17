function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 10){
                img.setAttribute('src', "imagens/foto-bebe-m.png")
            } else if (idade < 21){
                img.setAttribute('src', "imagens/foto-jovem-m.png")
            } else if(idade < 65){
                img.setAttribute('src', "imagens/foto-adulto-m.png")
            } else{
                img.setAttribute('src', "imagens/foto-idoso-m.png")
            }
        } else {
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute('src', "imagens/foto-bebe-f.png")
            } else if (idade < 21){
                img.setAttribute('src', "imagens/foto-jovem-f.png")
            } else if(idade < 65){
                img.setAttribute('src', "imagens/foto-adulto-f.png")
            } else{
                img.setAttribute('src', "imagens/foto-idoso-f.png")
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}