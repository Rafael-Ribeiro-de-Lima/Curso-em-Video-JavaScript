var lista = []
var res = document.querySelector('div#res')

function adicionar(){
    var numero = document.querySelector('input#txtnum')
    var num = Number(numero.value)
    var tab = document.querySelector('select#txttab')

    if (num < 1 || num > 100){ //Verifica se o valor é válido (entre 1 e 100)
        window.alert('Digite um valor válido!')
        numero.value = null

    } else if (lista.includes(num)){ //Verifica se o valor já foi digitado
        window.alert('Valor já adicionado! Não repita os valores!')
        numero.value = null

    }  else{
        lista.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        numero.value = null
        tab.appendChild(item)
        res.innerHTML = ''
    }
}

function calcular(){
    res.innerHTML = `<p>Ao todo, temos ${lista.length} número(s) cadastrado(s)</p>
    <p>O maior valor informado foi ${Math.max.apply(null, lista)}</p>
    <p>O menor valor informado foi ${Math.min.apply(null, lista)}</p>
    <p>A soma de todos os valores é ${somaValores(lista)}</p>
    <p>A média dos valores digitados é ${media(lista)}</p>`
}

function somaValores(list){
    var soma = 0
    for(c in list){
        soma += list[c]
    }
    return soma
}

function media(list){
    var soma = somaValores(list)
    var quant = list.length
    return soma/quant 
}




