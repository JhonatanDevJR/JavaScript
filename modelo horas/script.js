function carregar() {
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('foto')
    var data= new Date()
    var hora= data.getHours()
    
    msg.innerHTML=`Agora são ${hora} horas` 
if (hora>= 0 && hora<12) {
    img.src = 'manhã.png'
    document.body.style.background= 'rgb(204, 187, 93)'
    //Bom dia!
} else if (hora>=12 && hora<18) {
    img.src= 'tarde.png'
    document.body.style.background= 'rgb(168, 129, 28)'
    //Boa tarde!
} else {
     img.src= 'noite.png'
     document.body.style.background= 'rgb(75, 74, 74)'
    //Boa noie!
}}


