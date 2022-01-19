function contar(){
    var inicio = document.querySelector('input#txtinicio').value
    var final = document.querySelector('input#txtfinal').value
    var passo = document.querySelector('input#txtpasso').value
    var res = document.querySelector('div#res')
    var contagem = ''

    if (inicio.length == 0){
        window.alert('[ERRO] Digite um valor inicial')
    } else if(final.length == 0){
        window.alert('[ERRO] Digite um valor final')
    } else if(passo.length == 0){
        window.alert('[ERRO] Digite um valor para o passo')
    } else{
        var i = Number(inicio)
        var f = Number(final)
        var p = Number(passo)

        if(p==0){
            window.alert('[ERRO] O valor do passo deve ser diferente de zero!')
        } else if(i==f){
            window.alert('[ERRO] O valor inicial não pode ser igual ao final!')
        }        
        else if(i<f){
            if(p<0){
                window.alert('[ERRO] O valor inicial não pode ser menor que o final se o passo for negativo!')
            } else{
                for (var c = i; c <= f; c+=p){ //contagem crescente
                    contagem += `${String(c)} `
                }
            }
        } else if(f<i){
            if (p>0){
                window.alert('[ERRO] O valor inicial não pode ser maior que o final se o passo for positivo!')
            } else{
                for (var c = i; c >= f; c+=p){ //contagem decrescente 
                    contagem += `${String(c)} `
                }
            }
        }
        res.innerHTML = `${contagem}`
    }


}
