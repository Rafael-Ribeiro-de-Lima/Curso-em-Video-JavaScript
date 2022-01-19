let num = [5, 8, 2, 9, 3, 5]

console.log(num)


num[3] = 12
num.push(6)


console.log(num.sort())
console.log(num.length)

/*for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}*/

for(c in num){
    console.log(num[c])
}

valor = num.indexOf(5)
console.log(`A posição é ${valor}`)

valor = num.indexOf(1298)
console.log(`A posição é ${valor}`) //-1 significa que não há na lista