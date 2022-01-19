/*var inicio = 1
var final = 10
var passo = 1

contagem = ''
for (inicio; inicio <= final; inicio+=passo){
    contagem += `${String(inicio)} `
}
console.log(contagem)
*/

var inicio = 100
var final = 10
var passo = -10

contagem = ''

for (var c = final; c >= inicio; c+=passo){
    contagem += `${String(c)} `
}
console.log(contagem)