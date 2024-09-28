let num= document.getElementById('num')
let res= document.getElementById('res')
let lista= document.getElementById('sel')
let valores= []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function ação(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item= document.createElement('option')
        item.text=`O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
} else{
    window.alert('valor inválido.')
}
num.value=''
num.focus()
}
function resultado(){
    if( valores.length==0){
        alert('A caixa não pode ficar vazia!')
    } else{
        
        let total= valores.length
        let maior= valores[0]
        let menor= valores[0]
        let soma=0
        let med=0
        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos]>0)
                maior=valores[pos]
            if(valores[pos]<0)
                menor=valores[pos]
        }
        res.innerHTML=`O total de valores adicionados foi de: ${total}`
        res.innerHTML+=`<p>A soma de todos os valores é de: ${soma}</p>`
        res.innerHTML+=`<p>O maior valor adicionado foi o: ${maior}</p>`
        res.innerHTML+=`<p>O menor valor adicionado foi o: ${menor}</p>`
        res.innerHTML+=`<p>A média entre todos os números é de:${soma/total} </p>`
        
}
}
