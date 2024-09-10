function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.value.length== 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano- fano.value
        //res.innerHTML=`Idade calculada: ${idade}`
        var gênero= ''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero= 'homem'
            if( idade>=0 && idade<=10){
                //Criança
                img.setAttribute('src','homem bebe.jpg')
            } else if(idade>10 && idade<22){
                //Jovem
                img.setAttribute('src','jovem homem.jpg')
            } else if(idade> 22 && idade<50){
                //Adulto
                img.setAttribute('src','homem adulto.jpg')
            } else if(idade>50){
                //Idoso
                img.setAttribute('src','homem idoso.jpg')
            }    
        } else if(fsex[1].checked){
            gênero= 'Mulher'
            if( idade>=0 && idade<=10){
                //Criança
                img.setAttribute('src','mulher bebe.jpg')
            } else if(idade>10 && idade<22){
                //Jovem
                img.setAttribute('src','jovem mulher.jpg')
            } else if(idade> 22 && idade<50){
                //Adulto
                img.setAttribute('src','mulher adulta.jpg')
            } else if(idade>50){
                //Idosa
                img.setAttribute('src','mulher idosa.jpg')
            }   
        }
            res.style.textAlign='center'
            res.innerHTML= `Detectamos um(a) ${gênero} com idade de ${idade} anos.`
            res.appendChild(img)
    }

}

