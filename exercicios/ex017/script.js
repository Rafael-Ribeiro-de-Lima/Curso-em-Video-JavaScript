function tabuada(){
    let num = document.querySelector('input#txtnum').value
    let tab = document.querySelector('select#seltab')
    if (num.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let n = Number(num)
        let c = 1
        tab.innerHTML = ''
        for(c; c<= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        
    }
}