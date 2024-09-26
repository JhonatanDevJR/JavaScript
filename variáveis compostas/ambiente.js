let num= [5,2,8,9,3]
num [5]=15// vai anexar o valor '15' na unidade 5
//ordena do maior par ao menor
console.log(`O vetor tem:${num.length} posições`)// vai ler quantas casas tem o num
console.log(num)
console.log(num[3])//vai mostrar o valor da unidade 3
/*for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}
let pos= num.indexOf(5)
console.log(`O valor está na posição: ${pos}`)
if(pos==-1){
    console.log(`O valor não foi encontrado.`)
}


