var agora= new Date()
var h= agora.getHours()
console.log(`Agora são exatamente: ${h} horas.`)
if (h<12 && h>=6){
    console.log(`Bom dia! Agora é de manhã.`)
} else if(h>=12 && h<18){
    console.log(`Boa tarde! Agora é de tarde.`)
} else if(h>=18){
    console.log(`Boa noite! Agora é de noite.`)
} else if(h>=1 && h<6){
    console.log(`Boa madrugada.`)
}