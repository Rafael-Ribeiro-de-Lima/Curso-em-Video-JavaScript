function somavalores(){
    let num = [5, 8, 2, 9, 3, 5]
    let soma = 0

    for(c in num){
        soma += num[c]
    }
    return soma
}

console.log(somavalores())
